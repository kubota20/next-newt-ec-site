// components
import Container from "@/components/ui/container";

// features
import { CartList } from "@/pages/carts/cart-list";

const CartsPage = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <div className="my-32">
          <CartList />
        </div>
      </Container>
    </div>
  );
};

export default CartsPage;
