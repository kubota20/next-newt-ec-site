// firebase
import { addDoc, collection } from "firebase/firestore";

// type
import { OrderData } from "@/types/types";

// lib
import { db } from "@/lib/firebase";

export const SaveOrder = async (orderData: OrderData) => {
  try {
    const collectionRef = collection(db, "orders");
    const docRef = await addDoc(collectionRef, orderData);
    console.log("Order successfully written with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error writing order:", error);
    throw error; // ここでエラーをスロー
  }
};
