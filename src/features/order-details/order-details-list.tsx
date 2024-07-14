import { OrderDetailsCard } from "@/features/order-details/order-details-card";
import { ProductData } from "@/datatest/product-data";

export const OrderDetailsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {ProductData.map((item) => (
          <OrderDetailsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
