// src/composables/useAuth.js

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/Firebase'; // นำเข้า Firebase Firestore
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // นำเข้าจาก Firebase Storage

const auth = getAuth(); // Firebase Auth instance

// ฟังก์ชัน Logout ผู้ใช้
const logout = async () => {
    try {
        await signOut(auth);
        console.log('User logged out successfully.');
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

// ฟังก์ชันบันทึกข้อมูลผู้ใช้
const saveUserData = async (user, profilePicture = '') => {
    try {
        await setDoc(doc(db, 'users', user.uid), {
            name: user.displayName || 'Anonymous', // ตั้งค่าชื่อผู้ใช้หรือใช้ 'Anonymous' ถ้าไม่มี
            email: user.email,
            bio: '', // สามารถเพิ่มฟิลด์อื่นตามต้องการได้
            profilePicture: profilePicture // เพิ่มฟิลด์สำหรับ URL รูปภาพโปรไฟล์
        });
        console.log('User data saved!');
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};

// ฟังก์ชันดึงข้อมูลผู้ใช้
const getUserData = async (uid) => {
    const userDoc = doc(db, 'users', uid);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
        return docSnap.data(); // คืนค่าข้อมูลผู้ใช้
    } else {
        console.log('No such document!');
        return null; // คืนค่า null หากไม่พบข้อมูล
    }
};

// ฟังก์ชันอัปโหลดรูปภาพโปรไฟล์
const uploadProfilePicture = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `profilePictures/${file.name}`);

    // อัปโหลดไฟล์ไปยัง Firebase Storage
    await uploadBytes(storageRef, file);

    // รับ URL ของไฟล์ที่อัปโหลด
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL; // คืนค่า URL ของภาพ
};

// ติดตามสถานะการเข้าสู่ระบบ
const trackAuthState = () => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            await saveUserData(user); // บันทึกข้อมูลเมื่อผู้ใช้เข้าสู่ระบบ
        } else {
            console.log('No user is signed in.');
        }
    });
};

export { trackAuthState, logout, getUserData, uploadProfilePicture }; // ส่งออกฟังก์ชันทั้งหมด
