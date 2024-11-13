// firebase
import { addDoc, collection } from "firebase/firestore";

// type
import { OrderData } from "@/types/types";

// lib
import { db } from "@/lib/firebase";

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
