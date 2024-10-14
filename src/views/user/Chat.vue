<template>
  <UserLayout />
  <div class="chat-container bg-cream min-h-screen flex items-center justify-center">
    <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">ห้องแชท</h2>

      <div class="flex gap-2 mb-4">
        <input 
          v-model="message" 
          placeholder="พิมพ์ข้อความ..." 
          class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        <button 
          @click="sendMessage" 
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          ส่ง
        </button>
      </div>

      <div class="bg-gray-50 p-4 rounded-md max-h-80 overflow-y-auto">
        <h3 class="text-lg font-medium text-gray-700 mb-2">ข้อความ:</h3>
        <ul class="space-y-2">
          <li 
            v-for="msg in messages" 
            :key="msg.id" 
            class="flex items-start bg-blue-100 px-3 py-2 rounded-md text-gray-800"
          >
            <img :src="msg.senderProfilePicture || 'path/to/default/profile.jpg'" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2" />
            <div>
              <strong>{{ msg.senderName }}</strong>: {{ msg.text }}
              <button @click="deleteMessage(msg.id)" class="text-red-500 ml-2">ลบ</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <UserLayout2 />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/Firebase'; // นำเข้า db จาก firebase.js
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // นำเข้า Firebase Authentication
import UserLayout from '@/layouts/UserLayout.vue';
import UserLayout2 from '@/layouts/UserLayout2.vue';

const message = ref('');
const messages = ref([]);

// ฟังก์ชันส่งข้อความ
const sendMessage = async () => {
  const auth = getAuth();
  const user = auth.currentUser; // รับข้อมูลผู้ใช้ที่เข้าสู่ระบบ

  if (message.value.trim() === '' || !user) {
    alert('กรุณาพิมพ์ข้อความก่อนส่ง');
    return;
  }

  try {
    await addDoc(collection(db, 'messages'), { 
      text: message.value, 
      timestamp: Date.now(),
      senderId: user.uid, // เก็บ UID ของผู้ส่ง
      senderName: user.displayName || 'ผู้ใช้ไม่ระบุ', // เก็บชื่อของผู้ส่ง
      senderProfilePicture: user.photoURL || 'path/to/default/profile.jpg', // ใช้ URL ของภาพโปรไฟล์เริ่มต้นถ้าไม่มี
    });
    message.value = ''; // เคลียร์ข้อความหลังส่ง
  } catch (error) {
    console.error("Error sending message:", error);
    alert("เกิดข้อผิดพลาดในการส่งข้อความ: " + error.message);
  }
};

// ฟังก์ชันดึงข้อมูลข้อความเมื่อคอมโพเนนต์ถูกเมานท์
onMounted(() => {
  const messagesCollection = collection(db, 'messages');
  onSnapshot(messagesCollection, (snapshot) => {
    messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    messages.value.sort((a, b) => a.timestamp - b.timestamp); // เรียงตามเวลา
  });
});

// ฟังก์ชันลบข้อความ
const deleteMessage = async (id) => {
  try {
    await deleteDoc(doc(db, 'messages', id)); // ลบเอกสารข้อความที่ระบุ
    console.log(`Message ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting message:", error);
    alert("เกิดข้อผิดพลาดในการลบข้อความ: " + error.message);
  }
};
</script>

<style>
/* กำหนดสีพื้นหลังแบบนวล */
.chat-container {
  background-color: #1d1d1d; /* สีครีมอ่อน */
}

input {
  transition: all 0.3s;
}

input:focus {
  border-color: #a3c4f3;
  box-shadow: 0 0 5px rgba(66, 153, 225, 0.5);
}
</style>
