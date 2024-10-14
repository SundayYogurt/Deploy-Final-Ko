<template>
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
            <h1 class="text-3xl font-semibold text-center text-gray-700">Sign up</h1>
            <form class="space-y-4" @submit.prevent="handleSignUp">
                <div>
                    <label class="label">
                        <span class="text-base label-text">Name</span>
                    </label>
                    <input type="text" v-model="name" placeholder="Name" class="w-full input input-bordered" required />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Email</span>
                    </label>
                    <input type="email" v-model="email" placeholder="Email Address" class="w-full input input-bordered" required />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Password</span>
                    </label>
                    <input type="password" v-model="password" placeholder="Enter Password" class="w-full input input-bordered" required />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" v-model="confirmPassword" placeholder="Confirm Password" class="w-full input input-bordered" required />
                </div>
                <div>
                   <button type="submit" class="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                       Sign Up
                   </button>
                </div>
                <span>Already have an account? 
                    <RouterLink to="/login" class="text-blue-600 hover:text-blue-800 hover:underline">Login</RouterLink>
                </span>
            </form>
            <!-- ... Rest of your code ... -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '@/Firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'; // Import SweetAlert2

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleSignUp = async () => {
    // ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกัน
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
        // เมื่อสมัครเสร็จแล้วให้แสดงข้อความสำเร็จ
        Swal.fire({
            title: 'Success!',
            text: 'User signed up successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        // เปลี่ยนเส้นทางไปที่หน้า sign in
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
