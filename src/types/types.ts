import type { Content } from "newt-client-js";

export type ProductProps = {
  title: string;
  image: ImageProps;
  description: string;
  price: number;
  category: CategoryProps[];
} & Content;

export type ImageProps = {
  src: string;
  title: string;
  height: number;
  width: number;
} & Content;

export type CategoryProps = {
  name: string;
  slug: string;
} & Content;

// 注文用
export type ProductItem = {
  title: string;
  price: number;
};

export type OrderData = {
  name: string | null | undefined;
  email: string | null;
  items: ProductItem[];
  createdAt: Date;
  totalPrice: number;
};
