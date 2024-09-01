import Image from "next/image";

// components
import Container from "@/components/container";
import { Button } from "@/components/shadcnUi/button";
import { Info } from "@/components/info";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/shadcnUi/select";

// icon
import { ShoppingBag, ShoppingCart } from "lucide-react";

// test
// import { ProductData } from "@/datatest/product-data";

// type
import { ProductProps } from "@/types/types";

type ProductDataProps = {
  item: ProductProps | undefined;
};

export const Product = ({ item }: ProductDataProps) => {
  if (!item) {
    return <div>商品が見つかりません。</div>;
  }

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
              <div className="flex items-center gap-2 ">
                {/* 個数選択 */}
                <Select>
                  <SelectTrigger className="w-[80px] bg-white">
                    <SelectValue placeholder="個数" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border min-w-[80px]">
                    <SelectItem value="light">1</SelectItem>
                    <SelectItem value="dark">2</SelectItem>
                    <SelectItem value="sysatem">3</SelectItem>
                  </SelectContent>
                </Select>
                {/* 選択した数だけプラス */}
                <p>合計{item.price}円</p>
              </div>
              {/* 注文、カートボタン */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <Button className="border  gap-2">
                  <ShoppingBag />
                  注文する
                </Button>
                <Button className="border  gap-2">
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
