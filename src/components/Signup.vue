<template>
    <div class="relative flex flex-col justify-center h-screen overflow-hidden" style="background-color: aliceblue">
        <div class="w-full p-6 m-auto bg-white rounded-2xl shadow-lg max-w-md">
            <h1 class="text-3xl font-semibold text-center text-teal-700">Sign up</h1>
            <form class="space-y-4" @submit.prevent="handleSignUp">
                <div>
                    <label class="label">
                        <span class="text-base label-text text-gray-600">Name</span>
                    </label>
                    <input type="text" v-model="name" placeholder="Name" 
                        class="custom-input" required />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text text-gray-600">Email</span>
                    </label>
                    <input type="email" v-model="email" placeholder="Email Address" 
                        class="custom-input" required />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text text-gray-600">Password</span>
                    </label>
                    <input type="password" v-model="password" placeholder="Enter Password" 
                        class="custom-input" required />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text text-gray-600">Confirm Password</span>
                    </label>
                    <input type="password" v-model="confirmPassword" placeholder="Confirm Password" 
                        class="custom-input" required />
                </div>
                <div>
                   <button type="submit" 
                        class="w-full flex justify-center bg-teal-400 hover:bg-teal-600 text-white p-3 rounded-full font-semibold shadow-md transition duration-500">
                       Sign Up
                   </button>
                </div>
                <span>Already have an account? 
                    <RouterLink to="/login" class="text-blue-500 hover:text-blue-700 hover:underline">
                        Login
                    </RouterLink>
                </span>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/Firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleSignUp = async () => {
    if (password.value !== confirmPassword.value) {
        Swal.fire({
            title: 'Error!',
            text: 'Passwords do not match.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        Swal.fire({
            title: 'Success!',
            text: 'User signed up successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        router.push('/login');
    } catch (error) {
        console.error("Error signing up: ", error);
        Swal.fire({
            title: 'Error!',
            text: 'Error signing up: ' + error.message,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
};
</script>

<style scoped>
/* ปรับสีและสไตล์ของ input */
.custom-input {
    width: 100%;
    padding: 12px;
    border: 2px solid #d2effa; /* ขอบสีฟ้าอ่อน */
    background-color: #e3f2fd; /* พื้นหลังสีฟ้าอ่อน */
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s, background-color 0.3s;
}

.custom-input:focus {
    outline: none;
    border-color: #039be5; /* ขอบสีฟ้าเข้มเมื่อ focus */
    background-color: #bbdefb; /* พื้นหลังเข้มขึ้นเมื่อ focus */
}

.custom-input:hover {
    border-color: #81d4fa; /* ขอบสีสดขึ้นเมื่อ hover */
}
</style>
