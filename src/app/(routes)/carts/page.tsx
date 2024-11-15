// components
import Container from "@/components/ui/container";
import CartList from "@/components/pages/carts/cart-list";

const CartsPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Container>
        <div className="my-32">
          <CartList />
        </div>
      </Container>
    </div>
  );
};

export default CartsPage;
