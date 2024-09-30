"use client";

import { useState } from "react";
import Image from "next/image";

// components
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Info } from "@/components/ui/info";
import QuantitySelection from "@/components/ui/quantity-selection";

// icon
import { ShoppingBag, ShoppingCart } from "lucide-react";

// test
// import { ProductData } from "@/datatest/product-data";

// type
import type { MouseEventHandler } from "react";
import { ProductProps } from "@/types/types";

// hooks
import Currency from "@/components/ui/currency";

// clerk
import { useAuthenticatedCart } from "@/hooks/use-authenticated-cart";

type ProductDataProps = {
  item: ProductProps | undefined;
};

export const Product = ({ item }: ProductDataProps) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useAuthenticatedCart();

  if (!item) {
    return <div>商品が見つかりません。</div>;
  }

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = () => {
    cart.addItem(item);
  };

  return (
    <>
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
                <Button className="border gap-2">
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
    </>
  );
};
