import Container from "@/components/elements/container";
import { OrderDetailsList } from "@/features/order-details/order-details-list";
import React from "react";

const OrderDetailsPage = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <div className="my-32">
          <h2 className="text-center my-16 font-bold text-3xl">注文履歴</h2>
          <OrderDetailsList />
        </div>
      </Container>
    </div>
  );
};

export default OrderDetailsPage;
