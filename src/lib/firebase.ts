// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

// type
import { OrderData } from "@/types/types";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MWSSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const SaveOrder = async (orderData: OrderData) => {
  try {
    // コレクション名を "orders" にします
    const ordersRef = collection(db, "orders");
    // ドキュメントID自動的に割り当て, "orderData" でデータの中身を入れる
    const docRef = await addDoc(ordersRef, orderData);
    console.log("Order successfully written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error writing order: ", error);
  }
};
