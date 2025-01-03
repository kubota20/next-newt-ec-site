// types
import { ProductProps } from "@/types/types";

// zustand
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// toast
import toast from "react-hot-toast";

interface CartProps {
  items: ProductProps[];
  addItem: (item: ProductProps) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],

      // カート追加
      addItem: (item: ProductProps) => {
        const currentItems = get().items;
        // currentItems配列にあるidと渡されたitemのidが一致した時にイベントを起こす
        const existingItem = currentItems.find(
          (currentItem) => currentItem?._id === item?._id
        );

        if (!existingItem) {
          toast.success("カートに追加されました");
        }

        if (existingItem) {
          return toast.error("すでにカートに入ってます");
        }

        set({ items: [...currentItems, item] });
      },

      // 削除
      removeItem: (id: string) => {
        // Product配列にあるidとremoveItemにあるidが違えばイベントを起こす
        set({ items: [...get().items.filter((item) => item?._id !== id)] });
      },

      // カートの全削除
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
