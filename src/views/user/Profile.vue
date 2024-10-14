<template>
    <UserLayout />
    
    <div class="profile-container max-w-md mx-auto mt-60 p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center mb-4">โปรไฟล์ของคุณ</h2>
        <div class="flex flex-col items-center">
            <img :src="profilePictureUrl" alt="Profile Picture" class="profile-picture mb-4" />
            <input type="file" @change="handleFileUpload" accept="image/*" class="hidden" ref="fileInput" />
            <button @click="selectFile" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:bg-blue-600 transition">Upload Profile Picture</button>
        </div>
        <div class="user-info text-center">
            <p class="text-lg"><strong>Email:</strong> {{ email }}</p>
            <p class="text-lg"><strong>Bio:</strong> {{ bio }}</p>
        </div>
    </div>
    <div class=" mt-40">
    <UserLayout2 />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';
import { getUserData, uploadProfilePicture } from '@/composables/useAuth'; // ใช้ฟังก์ชันนี้เพื่อนำเข้าข้อมูลผู้ใช้
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/Firebase'; // นำเข้า Firebase Firestore
import UserLayout from '@/layouts/UserLayout.vue';
import UserLayout2 from '@/layouts/UserLayout2.vue';

const profilePictureUrl = ref('');
const email = ref('');
const bio = ref('');

// ฟังก์ชันจัดการการอัปโหลดไฟล์
const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
        try {
            const imageUrl = await uploadProfilePicture(file); // อัปโหลดรูปภาพ
            profilePictureUrl.value = imageUrl; // อัปเดต URL รูปภาพโปรไฟล์
  console.log('File selected:', file); // เพิ่มบรรทัดนี้
            // บันทึก URL รูปภาพโปรไฟล์ลงใน Firestore
            const user = getAuth().currentUser;
            if (user) {
                await saveUserProfilePicture(user.uid, imageUrl); // ฟังก์ชันสำหรับบันทึก URL รูปภาพ
            }
        } catch (error) {
            console.error('Failed to upload profile picture:', error);
        }
    }
};

// ฟังก์ชันสำหรับบันทึก URL รูปภาพโปรไฟล์ลง Firestore
const saveUserProfilePicture = async (uid, imageUrl) => {
    try {
        const userDocRef = doc(db, 'users', uid);
        await setDoc(userDocRef, { profilePicture: imageUrl }, { merge: true }); // ใช้ merge เพื่ออัปเดตเฉพาะฟิลด์ที่ต้องการ
        console.log('Profile picture URL saved in Firestore!');
    } catch (error) {
        console.error('Error saving profile picture URL:', error);
    }
};

// ฟังก์ชันเปิด dialog สำหรับเลือกไฟล์
const selectFile = () => {
    const fileInput = document.querySelector('input[type=file]');
    if (fileInput) {
        fileInput.click();
    }
};

// เรียกใช้เมื่อคอมโพเนนต์ถูกสร้าง
onMounted(async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        const userData = await getUserData(user.uid); // ดึงข้อมูลผู้ใช้
        profilePictureUrl.value = userData.profilePicture || ''; // ตั้งค่า URL รูปภาพโปรไฟล์
        email.value = user.email; // ตั้งค่าอีเมล
        bio.value = userData.bio || 'ไม่มีข้อมูล'; // ตั้งค่าข้อมูลเพิ่มเติม
    }
});
</script>

<style>
.profile-picture {
    width: 100px; /* ขนาดของรูปภาพ */
    height: 100px; /* ขนาดของรูปภาพ */
    border-radius: 50%; /* ทำให้เป็นรูปวงกลม */
    object-fit: cover; /* ให้รูปภาพไม่ผิดสัดส่วน */
    border: 2px solid #e5e7eb; /* ขอบรูปภาพ */
}

.profile-container {
    border: 1px solid #e5e7eb; /* ขอบการ์ด */
}
</style>
