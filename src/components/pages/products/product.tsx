"use client";

import { useState } from "react";

import Image from "next/image";

// components
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/ui/info";
import QuantitySelection from "@/components/ui/quantity-selection";
import Currency from "@/components/ui/currency";

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

// actions
// import { getProductById } from "@/actions/get-products";

type ProductDataProps = {
  item: ProductProps | undefined;
};

const Product = ({ item }: ProductDataProps) => {
  const [quantity, setQuantity] = useState(1);

  const { isSignedIn } = useAuth();
  const cart = useCart();
  const orderModal = useOrderModal();

  if (!item) {
    return <div>商品が見つかりません。</div>;
  }

  const onOrder: MouseEventHandler<HTMLButtonElement> = () => {
    orderModal.onOpen(item);
  };

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
          <div className="h-[300px] sm:h-[450px] border shadow-xl bg-gray-300">
            <Image
              src={item.image}
              alt={item.title}
              className="h-[300px] sm:h-[450px] object-cover"
            />
          </div>
          {/* タイトル */}
          <div className="flex items-center justify-between my-6">
            <Info title={item.title} />
            <p className="font-bold">{item?.price}円</p>
          </div>
          {/* 説明 */}
          <p>{item.description}</p>
          <div className="bg-gray-100 p-2 my-4">
            <div className="flex items-center justify-around gap-2 ">
              {/* 選択した数だけプラス */}
              <p className="flex">
                合計: <Currency value={item.price * quantity} />
              </p>
              {/* 個数選択 */}
              <QuantitySelection setQuantity={setQuantity} />
            </div>
            {/* 注文、カートボタン */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button className="border gap-2" onClick={onOrder}>
                <ShoppingBag />
                注文する
              </Button>
              <Button className="border gap-2" onClick={onAddtoCart}>
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
