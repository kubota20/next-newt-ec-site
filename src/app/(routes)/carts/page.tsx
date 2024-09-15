// components
import Container from "@/components/ui/container";

// features
import { CartList } from "@/features/carts/cart-list";

const CartsPage = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <div className="my-32">
          <h2 className="text-center my-16 font-bold text-3xl">カート</h2>
          <CartList />
        </div>
      </Container>
    </div>
  );
};

export default CartsPage;
