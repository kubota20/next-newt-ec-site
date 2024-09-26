"use client";

import { useEffect, useState } from "react";

// hooks
import { useCart } from "@/hooks/use-cart";

// features
import { CartCard } from "@/pages/carts/cart-card";
import { Button } from "@/components/ui/button";

// test
// import { ProductData } from "@/datatest/product-data";

export const CartList = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleClearCart = () => {
    cart.removeAll();
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

      <div className="mt-6 text-center">
        {cart.items.length > 0 && (
          <Button variant="destructive" onClick={handleClearCart}>
            カートを全て削除
          </Button>
        )}
      </div>
    </div>
  );
};
