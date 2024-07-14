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
} from "@/components/elements/card";

interface OrderDetailsProps {
  item: ProductDataProps;
}

export const OrderDetailsCard: React.FC<OrderDetailsProps> = ({ item }) => {
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
            <CardContent></CardContent>

            <CardFooter className="flex items-center justify-around gap-2">
              <div>個数:1</div>
              <div>合計:{item.price}</div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};
