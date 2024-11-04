"use client";

import { useState } from "react";

// type
import type { MouseEventHandler } from "react";
// import { OrderData } from "@/types/types";

// hooks
import { useOrderModal } from "@/hooks/use-order-modal";

// components
import { Modal } from "@/components/ui/modal";
import QuantitySelection from "@/components/ui/quantity-selection";
import Currency from "@/components/ui/currency";
import { Button } from "../ui/button";

// lib
import { SaveOrder } from "@/lib/firebase";

// clerk
import { useUser } from "@clerk/nextjs";

const OrderModal = () => {
  const { user } = useUser();
  const [quantity, setQuantity] = useState(1);

  const orderModal = useOrderModal();
  const product = useOrderModal((state) => state.data);

  // 商品がない場合、モーダルを表示しない
  if (!product) {
    return null;
  }

  const orderData = {
    name: user?.fullName || "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    items: [{ title: product.title, price: product.price }],
    totalPrice: product.price * quantity,
    createdAt: new Date(),
  };

  const handleOrder: MouseEventHandler<HTMLButtonElement> = async () => {
    SaveOrder(orderData);
  };

  return (
    <Modal
      isOpen={orderModal.isOpen}
      onClose={orderModal.onClose}
      title={product.title}
      description={product.description}
      image={product.image}
    >
      <div className="flex items-center justify-between my-4">
        <div className="flex">
          合計:
          <Currency value={product.price * quantity} />
        </div>
        {/* 個数選択 */}
        <QuantitySelection setQuantity={setQuantity} />
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          className="bg-black text-white hover:bg-gray-700"
          onClick={handleOrder}
        >
          注文
        </Button>
        <Button variant="destructive" onClick={orderModal.onClose}>
          キャンセル
        </Button>
      </div>
    </Modal>
  );
};

export default OrderModal;
