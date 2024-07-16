import Product1 from "@/datatest/images/product1.png";
import Product2 from "@/datatest/images/product2.png";
import Product3 from "@/datatest/images/product3.jpg";
import Product4 from "@/datatest/images/product4.png";
import Product5 from "@/datatest/images/product5.jpg";
import { StaticImageData } from "next/image";

export type ProductDataProps = {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  price: number;
};

export const ProductData = [
  {
    id: 1,
    name: "教育",
    image: Product1,
    description: "簡単な勉強方法を覚えて、記憶力向上する。",
    price: 1000,
  },
  {
    id: 2,
    name: "自然を守ろう",
    image: Product2,
    description: "昔々あるところに...",
    price: 1500,
  },
  {
    id: 3,
    name: "人体の仕組み",
    image: Product3,
    description: "脳、心臓、内臓、血管、筋肉それ等の仕組みを学ぶ",
    price: 1000,
  },
  {
    id: 4,
    name: "教育",
    image: Product4,
    description: "読書１０００冊で全てが変わる",
    price: 1300,
  },
  {
    id: 5,
    name: "小説",
    image: Product5,
    description: "森の中の子供達の物語",
    price: 1700,
  },
];
