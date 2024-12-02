"use client";

import { useState, useEffect } from "react";

// components
import CartButton from "@/components/ui/cart-button";

// hooks
import { useCart } from "@/hooks/use-cart";

const CartAction = () => {
  const [showCartButton, setShowCartButton] = useState(false);
  const cart = useCart();

  useEffect(() => {
    if (cart.items.length > 0) {
      // カートに商品が追加されたらボタンを表示
      setShowCartButton(true);

      // 5秒後にボタンを非表示にする
      const timer = setTimeout(() => {
        setShowCartButton(false);
      }, 5000);

      // クリーンアップ関数でタイマーをクリア
      return () => clearTimeout(timer);
    }
  }, [cart.items.length]); // カートのアイテム数が変更されたときに実行

  return (
    <>
      {showCartButton && (
        <div className="fixed z-50 bottom-6 right-6">
          <CartButton className="bg-black rounded-full animate-bounce" />
        </div>
      )}
    </>
  );
};

export default CartAction;
