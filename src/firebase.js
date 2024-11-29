import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIB0eGnz_IvfsMd4zVrAVuCcX2nIfNedw",
  authDomain: "netflix-clone-23a76.firebaseapp.com",
  projectId: "netflix-clone-23a76",
  storageBucket: "netflix-clone-23a76.appspot.com",
  messagingSenderId: "391760195678",
  appId: "1:391760195678:web:9d99c91c6a2b3c581bc4cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;

    // Add user to Firestore
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    // Show success message
    toast.success("User created successfully!");
  } catch (error) {
    console.error("Signup error:", error);
    // Show error message using toast
    toast.error(error.message || "Error signing up");
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Show success message on successful login
    toast.success("Login successful!");
  } catch (error) {
    console.error("Login error:", error);
    // Show error message using toast
    toast.error(error.message || "Error logging in");
  }
};

// Logout function
const logout = () => {
  signOut(auth);
  // Optionally, show a message on logout
  toast.info("Logged out successfully");
};

// Export functions
export { auth, db, login, signup, logout };
