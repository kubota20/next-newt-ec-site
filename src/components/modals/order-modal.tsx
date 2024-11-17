"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

// type
import type { MouseEventHandler } from "react";

// hooks
import { useOrderModal } from "@/hooks/use-order-modal";
import { useCart } from "@/hooks/use-cart";

// components
import { Modal } from "@/components/ui/modal";
import QuantitySelection from "@/components/ui/quantity-selection";
import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";

// actions
import { SaveOrder } from "@/actions/post-order";

// clerk
import { useUser } from "@clerk/nextjs";

// toast
import toast from "react-hot-toast";

const OrderModal = () => {
  const { user } = useUser();
  const [quantity, setQuantity] = useState(1);

  const cart = useCart();
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
    // ログインしてない場合
    if (!user) {
      toast.error("注文するにはログインが必要です");
      return; // 処理を中断
    }

    SaveOrder(orderData);
    toast.success("注文しました");
    cart.removeItem(product._id);
    redirect("/carts");
  };

  return (
    <Modal
      isOpen={orderModal.isOpen}
      onClose={() => {
        setQuantity(1); // 個数をリセット
        orderModal.onClose();
      }}
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
        <Button
          variant="destructive"
          onClick={() => {
            setQuantity(1); // 個数をリセット
            orderModal.onClose();
          }}
        >
          キャンセル
        </Button>
      </div>
    </Modal>
  );
};

export default OrderModal;
