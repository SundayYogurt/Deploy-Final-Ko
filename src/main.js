import { createApp } from "vue";
import { createPinia } from "pinia";
import './Firebase'
import "./styles.css";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import DaisyUI
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { trackAuthState } from '@/composables/useAuth'; // นำเข้า trackAuthState

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(VueSweetalert2);
app.use(createPinia());
app.use(router);
trackAuthState();
app.mount("#app");
