// features
import { CartCard } from "@/features/carts/cart-card";

// test
import { ProductData } from "@/datatest/product-data";

export const CartList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {ProductData.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
