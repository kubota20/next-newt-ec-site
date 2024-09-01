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
