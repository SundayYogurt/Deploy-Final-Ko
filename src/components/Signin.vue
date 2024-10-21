<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden" style="background-color: aliceblue">
    <div class="w-full p-6 m-auto bg-white rounded-2xl shadow-lg max-w-md">
      <h1 class="text-3xl font-semibold text-center text-teal-700">Sign In</h1>
      <p class="text-center text-gray-500">Please sign in to your account.</p>
      <form @submit.prevent="handleSignIn" class="space-y-5 mt-5">
        <div>
          <label class="text-sm font-medium text-gray-700">Email</label>
          <input 
            v-model="email" 
            class="custom-input" 
            type="email" 
            placeholder="mail@gmail.com" 
            required 
          />
        </div>
        <div>
          <label class="text-sm font-medium text-gray-700">Password</label>
          <input 
            v-model="password" 
            class="custom-input" 
            type="password" 
            placeholder="Enter your password" 
            required 
          />
        </div>
        <div>
          <button 
            type="submit" 
            class="btn-green">
            Sign in
          </button>
        </div>
        <span class="block text-center">
          Don't have an account? 
          <RouterLink to="/signup" class="text-blue-500 hover:text-blue-700 hover:underline">
            Sign up
          </RouterLink>
        </span>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const handleSignIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    Swal.fire({
      title: 'Welcome!',
      text: 'User signed in successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    router.push('/');
  } catch (error) {
    let errorMessage = "Invalid email or password.";

    if (error.code === 'auth/user-not-found') {
      errorMessage = "User not found. Please check your email.";
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = "Incorrect password. Please try again.";
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = "The email address is not valid.";
    }

    Swal.fire({
      title: 'Error!',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* ปรับ input ให้เหมือนกับหน้า Sign Up */
.custom-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #a0d8ef;
  background-color: #e3f2fd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s, background-color 0.3s;
}

.custom-input:focus {
  outline: none;
  border-color: #039be5;
  background-color: #bbdefb;
}

.custom-input:hover {
  border-color: #81d4fa;
}

/* ปรับปุ่มให้เข้ากันกับหน้า Sign Up */
.btn-green {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #daba51;
  color: white;
  padding: 12px;
  border-radius: 9999px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn-green:hover {
  background-color: #f0c330;
}
</style>
