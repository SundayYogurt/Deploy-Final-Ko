<template>
  <div
    class="navbar fixed top-0 left-0 w-full z-50"
    style="background-color: #800020"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>
            <a>Start</a>
            <ul class="p-2">
              <li><RouterLink to="/chat">Chat</RouterLink></li>
            </ul>
          </li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <img
        src="/img/logocut.png"
        alt="Logo"
        class="h-16 w-16 rounded-full object-cover mr-3"
      />
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/" class="text-white">Home</RouterLink></li>
        <li>
          <details>
            <summary class="text-white">Start</summary>
            <ul class="p-2">
              <li>
                <RouterLink to="/chat" class="text-gray-700">Chat</RouterLink>
              </li>
            </ul>
          </details>
        </li>
        <li><RouterLink to="/about" class="text-white">About</RouterLink></li>
        <li>
          <RouterLink to="/contact" class="text-white">Contact</RouterLink>
        </li>
      </ul>
    </div>

    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="User Avatar" :src="userProfilePicture" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <RouterLink to="/profile" class="justify-between">
              {{ userName }} <span class="badge">New</span>
            </RouterLink>
          </li>
          <li><a>Settings</a></li>
          <li><RouterLink to="/signup">Logout</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>
  <slot></slot>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
import { db } from "@/Firebase"; // นำเข้า db จาก firebase.js
import { doc, getDoc } from "firebase/firestore";

const userProfilePicture = ref("");
const userName = ref("");

const auth = getAuth();

const fetchUserProfile = async () => {
  const user = auth.currentUser; // รับข้อมูลผู้ใช้ที่เข้าสู่ระบบ

  if (user) {
    const userDoc = doc(db, "users", user.uid); // ใช้ UID ของผู้ใช้เพื่อดึงข้อมูล
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      const data = docSnap.data();
      userProfilePicture.value = data.profilePicture || ""; // รับ URL รูปโปรไฟล์
      userName.value = data.displayName || "ผู้ใช้ไม่ระบุ"; // รับชื่อผู้ใช้
    }
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>

<style scoped>
/* เพิ่ม CSS ตามต้องการที่นี่ */
</style>
