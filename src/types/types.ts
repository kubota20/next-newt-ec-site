export interface ProductProps {
  _id: string;
  createdAt: string;
  title: string;
  image: ImageProps;
  description: string;
  price: number;
  category: CategoryProps[];
}

export interface ImageProps {
  _id: string;
  src: string;
  title: string;
  height: number;
  width: number;
}

export interface CategoryProps {
  _id: string;
  name: string;
}
