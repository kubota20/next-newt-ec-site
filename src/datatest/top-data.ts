import TopImage1 from "@/datatest/images/top1.jpg";
import TopImage2 from "@/datatest/images/top2.jpg";
import TopImage3 from "@/datatest/images/top3.jpg";
import { StaticImageData } from "next/image";

export interface TopImageProps {
  id: number;
  title: string;
  image: StaticImageData;
  buttonText: string;
}

export const TopData = [
  {
    id: 1,
    title: "Books Site",
    image: TopImage1,
    buttonText: "商品を見に行く",
  },
  {
    id: 2,
    title: "Books Site",
    image: TopImage2,
    buttonText: "商品を見に行く",
  },
  {
    id: 3,
    title: "Books Site",
    image: TopImage3,
    buttonText: "商品を見に行く",
  },
];
