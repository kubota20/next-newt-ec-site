"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { user } = useUser();
  const [quantity, setQuantity] = useState(1);
  const loading = false;

  const cart = useCart();
  const orderModal = useOrderModal();
  const product = useOrderModal((state) => state.data);

  // 商品がない場合、モーダルを表示しない
  if (!product) {
    return null;
  }

  // データベースに渡すデータを作成
  const orderData = {
    name: user?.fullName || "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    items: [{ title: product.title, price: product.price }],
    totalPrice: product.price * quantity,
    createdAt: new Date(),
  };

  // 注文ボタンに渡しましす
  const handleOrder: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      // ログインしてない場合
      if (!user) {
        toast.error("注文するにはログインが必要です");
        return; // 処理を中断
      }
      // データベースに渡す
      SaveOrder(orderData);

      toast.success("注文しました");

      // カートにある場合削除
      cart.removeItem(product._id);

      // モーダルを閉じる
      orderModal.onClose();

      // ホームページに行く
      router.push("/");
    } catch (error) {
      console.log("order error: ", error);
      toast.error("注文に失敗しました。");
    }
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
      {/* 合計金額 */}
      <div className="flex items-center justify-between my-4">
        <div className="flex">
          合計:
          <Currency value={product.price * quantity} />
        </div>
        {/* 個数選択 */}
        <QuantitySelection setQuantity={setQuantity} />
      </div>

      {/* 注文 & キャンセル ボタン */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          className="bg-black text-white hover:bg-gray-700"
          onClick={handleOrder}
          disabled={loading}
        >
          注文
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            setQuantity(1); // 個数をリセット
            orderModal.onClose();
          }}
          disabled={loading}
        >
          キャンセル
        </Button>
      </div>
    </Modal>
  );
};

export default OrderModal;
