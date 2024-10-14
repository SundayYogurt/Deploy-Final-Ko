<template>
  <UserLayout />
  <div class="contact-container min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-6 bg-black rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center text-white mb-6">ติดต่อเรา</h2>

      <form @submit.prevent="submitContactForm" class="space-y-4">
        <div>
          <label for="name" class="block text-red-400">ชื่อ:</label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            placeholder="กรุณากรอกชื่อ"
            class="w-full px-4 py-2 border border-red-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>
        
        <div>
          <label for="email" class="block text-red-400">อีเมล:</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            placeholder="กรุณากรอกอีเมล"
            class="w-full px-4 py-2 border border-red-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-red-400">ข้อความ:</label>
          <textarea
            v-model="formData.message"
            id="message"
            placeholder="กรุณากรอกข้อความ"
            rows="4"
            class="w-full px-4 py-2 border border-red-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          ส่งข้อความ
        </button>
      </form>

      <div class="mt-6 text-center">
        <h3 class="text-lg font-medium text-red-400">ข้อมูลการติดต่อ:</h3>
        <p class="text-gray-300">โทร: 012-345-6789</p>
        <p class="text-gray-300">อีเมล: contact@yourshop.com</p>
        <p class="text-gray-300">ที่อยู่: 123 ถนนตัวอย่าง, กรุงเทพฯ, ประเทศไทย</p>
      </div>
    </div>
  </div>
  <UserLayout2 />
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import UserLayout2 from '@/layouts/UserLayout2.vue';
import { ref } from 'vue';
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitContactForm = () => {
  console.log('Form Data Submitted:', formData.value);
  
  // เคลียร์ข้อมูลในฟอร์มหลังจากส่ง
  formData.value = {
    name: '',
    email: '',
    message: '',
  };

  // แสดง SweetAlert
  Swal.fire({
    title: 'ขอบคุณ!',
    text: 'ข้อความของคุณถูกส่งแล้ว!',
    icon: 'success',
    confirmButtonText: 'ตกลง'
  });
};
</script>

<style>
.contact-container {
  background-color: #181818; /* สีพื้นหลังดำ */
}

input,
textarea {
  transition: all 0.3s;
}

input:focus,
textarea:focus {
  border-color: #e63946;
  box-shadow: 0 0 5px rgba(230, 57, 70, 0.5);
}
</style>
