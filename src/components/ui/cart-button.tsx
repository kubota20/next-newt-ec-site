"use client";

import { useEffect, useState, forwardRef } from "react";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/ui/button";

// icon
import { ShoppingCart } from "lucide-react";

// hooks
import { useCart } from "@/hooks/use-cart";

// lib
import { cn } from "@/lib/utils";

// clerk
import { useAuth } from "@clerk/nextjs";

type CartButtonProps = {
  className?: string;
};

const CartButton = ({ className }: CartButtonProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  // ログインしてない場合このボタンは非表示になります。
  if (!isSignedIn) {
    return null;
  }

  return (
    <Button
      onClick={() => router.push("/carts")}
      className={cn("flex items-center hover:bg-gray-800", className)}
    >
      <ShoppingCart size={20} color="white" />
      <span className="ml-2 text-sm font-medium text-white">
        {cart.items.length}
      </span>
    </Button>
  );
};

export default CartButton;
