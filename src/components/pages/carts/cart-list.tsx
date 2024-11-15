"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

// type
import type { MouseEventHandler } from "react";

// toast
import { toast } from "react-hot-toast";

// hooks
import { useCart } from "@/hooks/use-cart";

// components
import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import CartCard from "@/components/pages/carts/cart-card";

// clerk
import { useAuth, useUser } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";

// actions
import { SaveOrder } from "@/actions/post-order";

// test
// import { ProductData } from "@/datatest/product-data";

const CartList = () => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  const [isMounted, setIsMounted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const cart = useCart();
  const items = useCart((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // カートにある商品を計算します　初期値は0円
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const orderData = {
    name: user?.fullName || "",
    email: user?.emailAddresses[0]?.emailAddress || "",
    items: items.map((item) => ({
      title: item.title,
      price: item.price,
    })),
    totalPrice: totalPrice,
    createdAt: new Date(),
  };

  //全てのカートの削除
  const handleClearCart = () => {
    if (!isSignedIn) {
      toast.error("カートを操作するにはログインが必要です");
      return;
    }
    cart.removeAll();
  };

  // 全て注文する
  const handleAllOrder: MouseEventHandler<HTMLButtonElement> = () => {
    if (!isSignedIn) {
      toast.error("注文するにはログインが必要です");
      return;
    }

    SaveOrder(orderData);
    toast.success("注文が完了しました");
    cart.removeAll();
    redirect("/products");
  };

  return (
    <div>
      <h2 className="text-center mb-10 font-bold text-3xl">
        カート({cart.items.length})
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {cart.items.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>

      <div className="mt-6 ">
        {cart.items.length > 0 && (
          <div className="flex items-center justify-around gap-4">
            <Button className="border gap-2" onClick={handleAllOrder}>
              <ShoppingBag />
              全て注文する
            </Button>
            <Button variant="destructive" onClick={handleClearCart}>
              カートを全て削除
            </Button>
            <div className="flex">
              合計 : <Currency value={totalPrice} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
