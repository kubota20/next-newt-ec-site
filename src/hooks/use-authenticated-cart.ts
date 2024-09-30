import { useAuth } from "@clerk/nextjs";
import { useCart } from "@/hooks/use-cart";
import { ProductProps } from "@/types/types";

export const useAuthenticatedCart = () => {
  const { isSignedIn } = useAuth();
  const cartStore = useCart();

  return {
    ...cartStore,
    addItem: (item: ProductProps) =>
      cartStore.addItem(item, isSignedIn ?? false),
  };
};
