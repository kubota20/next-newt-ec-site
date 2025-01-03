"use client";

import { MouseEventHandler } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// test
// import { ProductDataProps } from "@/datatest/product-data";

// type
import { ProductProps } from "@/types/types";

// components
import { Button } from "@/components/ui/button";

// icon
import { ChevronRight, ShoppingCart } from "lucide-react";

// hooks
import { useCart } from "@/hooks/use-cart";

// clerk
import { useAuth } from "@clerk/nextjs";

// toast
import toast from "react-hot-toast";

interface ProductCardProps {
  item: ProductProps;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { isSignedIn } = useAuth();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${item._id}
`);
  };

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = () => {
    if (!isSignedIn) {
      return toast.error("カートに商品を追加するにはログインしてください");
    }
    cart.addItem(item);
  };

  return (
    <>
      <div className="bg-gray-300  w-full h-32 lg:h-52  group rounded-full border space-y-4 relative overflow-hidden text-nowrap">
        <div className="rounded-full relative">
          {/* 画像 */}
          <Image
            src={item?.image}
            alt={item?.title}
            className="object-cover  w-full h-32 lg:h-52 "
          />

          {/* 640px以上ならボタンはHover時に表示 , 640px以内ならボタンは最初から表示*/}
          <div className="opacity-0 max-sm:opacity-100 sm:group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              {/* カートの追加ボタン */}
              <Button
                size="icon"
                className="size-7 md:size-8 lg:size-10"
                onClick={onAddtoCart}
              >
                <ShoppingCart size={20} className="text-gray-600" />
              </Button>

              {/* 商品ページボタン */}
              <Button
                size="icon"
                className="size-7 md:size-8 lg:size-10"
                onClick={handleClick}
              >
                <ChevronRight size={20} className="text-gray-600" />
              </Button>
            </div>
          </div>

          {/* 名前 値段 */}
          <div className="absolute z-10 top-0 flex flex-col items-center justify-around bg-black/35 rounded-lg w-full py-2 px-4 text-white">
            <h3 className="text-xs md:text-xl">{item?.title}</h3>
            <p className="text-sm md:text-base md:font-black">
              {item?.price}円
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
