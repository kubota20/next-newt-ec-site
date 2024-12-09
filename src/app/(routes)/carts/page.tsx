"use client";
// components
import Container from "@/components/ui/container";
import CartList from "@/components/pages/carts/cart-list";

// hooks
import { useCart } from "@/hooks/use-cart";

const CartsPage = () => {
  const cart = useCart();
  return (
    <div
      className={`flex flex-col mb-24 ${
        cart.items.length === 0 ? "h-full" : "" // カートが無い状態だとレイアウトが崩れるので追加
      }`}
    >
      <Container>
        <div className="my-32">
          <CartList />
        </div>
      </Container>
    </div>
  );
};

export default CartsPage;
