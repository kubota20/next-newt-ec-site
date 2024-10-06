"use client";

import { useState } from "react";
import Image from "next/image";

// test
// import { ProductDataProps } from "@/datatest/product-data";

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import QuantitySelection from "@/components/ui/quantity-selection";

// type
import { ProductProps } from "@/types/types";

// hooks
import { useCart } from "@/hooks/use-cart";

interface CartCardProps {
  item: ProductProps;
}

const CartCard: React.FC<CartCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();

  // 商品を削除する関数
  const onRemove = () => {
    cart.removeItem(item?._id);
  };

  return (
    <div>
      <Card className="">
        <div className="flex overflow-hidden">
          <div className="bg-gray-300 w-[180px] h-[230px]  sm:w-[320px] sm:h-[340px]">
            <Image
              src={item?.image}
              alt={item?.title}
              className="object-cover h-full w-full border-r"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <CardHeader>
              <CardTitle>{item?.title}</CardTitle>
              <CardDescription className="text-xs">
                {item?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                合計:
                <Currency value={item?.price * quantity} />
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-around gap-2">
              {/* 個数選択 */}
              <QuantitySelection setQuantity={setQuantity} />
              <Button onClick={onRemove} variant="destructive">
                削除
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartCard;
