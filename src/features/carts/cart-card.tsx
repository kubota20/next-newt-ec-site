import Image from "next/image";

// test
import { ProductDataProps } from "@/datatest/product-data";

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CartCardProps {
  item: ProductDataProps;
}

export const CartCard: React.FC<CartCardProps> = ({ item }) => {
  return (
    <div>
      <Card className="">
        <div className="flex overflow-hidden">
          <div className="bg-gray-300 w-[180px] h-[230px]  sm:w-[320px] sm:h-[340px]">
            <Image
              src={item.image}
              alt={item.name}
              className="object-cover h-full w-full border-r"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="text-xs">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>合計:{item.price}</div>
            </CardContent>

            <CardFooter className="flex items-center justify-around gap-2">
              {/* 個数選択 */}
              <Select>
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="個数" />
                </SelectTrigger>
                <SelectContent className="bg-white min-w-[60px]">
                  <SelectItem value="light">1</SelectItem>
                  <SelectItem value="dark">2</SelectItem>
                  <SelectItem value="system">3</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="destructive">削除</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};
