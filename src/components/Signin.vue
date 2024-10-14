<template>
    <div class="bg-no-repeat bg-cover bg-center relative" style="background-color: aliceblue">
        <div class="min-h-screen flex flex-col sm:flex-row justify-center">
            <div class="flex justify-center self-center z-10">
                <div class="p-12 bg-white mx-auto rounded-2xl shadow-lg w-full max-w-md">
                    <div class="mb-4">
                        <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
                        <p class="text-gray-500">Please sign in to your account.</p>
                    </div>
                    <form @submit.prevent="handleSignIn" class="space-y-5">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                            <input v-model="email" class="w-full text-base px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com" required>
                        </div>
                        <div class="space-y-2">
                            <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">Password</label>
                            <input v-model="password" class="w-full text-base px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password" required>
                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2'; // Import SweetAlert2

const email = ref('');
const password = ref('');
const router = useRouter();

const auth = getAuth(); // Initialize Firebase Auth

const handleSignIn = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        // เมื่อเข้าสู่ระบบสำเร็จ
        Swal.fire({
            title: 'Welcome!',
            text: 'User signed in successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        router.push('/'); // เปลี่ยนเส้นทางไปที่หน้า Home
    } catch (error) {
        let errorMessage = "Invalid email or password."; // ข้อความเริ่มต้นสำหรับข้อผิดพลาด

        // ตรวจสอบข้อผิดพลาดจาก Firebase
        if (error.code === 'auth/user-not-found') {
            errorMessage = "User not found. Please check your email.";
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = "Incorrect password. Please try again.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "The email address is not valid.";
        }

        // แสดงข้อความผิดพลาด
        Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};
</script>
