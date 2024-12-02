"use client";

import Image from "next/image";

// components
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/ui/info";

// icon
import { ShoppingBag, ShoppingCart } from "lucide-react";

// test
// import { ProductData } from "@/datatest/product-data";

// type
import type { MouseEventHandler } from "react";
import { ProductProps } from "@/types/types";

// hooks
import { useOrderModal } from "@/hooks/use-order-modal";
import { useCart } from "@/hooks/use-cart";

// clerk
import { useAuth } from "@clerk/nextjs";

// toast
import toast from "react-hot-toast";

type ProductDataProps = {
  item: ProductProps | undefined;
};

const Product = ({ item }: ProductDataProps) => {
  const { isSignedIn } = useAuth();
  const cart = useCart();
  const orderModal = useOrderModal();

  if (!item) {
    return <div>商品が見つかりません。</div>;
  }

  // 注文する
  const onOrder: MouseEventHandler<HTMLButtonElement> = () => {
    orderModal.onOpen(item);
  };

  // カートに追加する
  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = () => {
    if (!isSignedIn) {
      toast.error("カートを操作するにはログインが必要です");
      return;
    }
    cart.addItem(item);
  };

  return (
    <Container>
      <div className="my-32">
        <div className="p-4 sm:border">
          {/* 画像 */}
          <div className="h-[300px] sm:h-[450px] border shadow-xl bg-gray-300 ">
            <Image
              src={item.image}
              alt={item.title}
              className="w-[280px] h-full sm:h-[450px] object-cover mx-auto"
            />
          </div>

          {/* タイトル */}
          <div className="flex items-center justify-between my-6">
            <Info title={item.title} />
            <p className="font-bold">{item?.price}円</p>
          </div>

          {/* 説明 */}
          <p>{item.description}</p>
          <div className=" p-2 my-4">
            {/* 注文、カートボタン */}
            <div className="flex items-center justify-center gap-4 ">
              <Button className="border gap-2" onClick={onOrder}>
                <ShoppingBag />
                注文する
              </Button>
              <Button
                className="border gap-2 bg-black text-white hover:text-black"
                onClick={onAddtoCart}
              >
                <ShoppingCart />
                カートに追加
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
