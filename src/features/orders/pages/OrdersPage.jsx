import React from "react";
import OrdersTable from "../components/OrdersTable";

const OrdersPage = () => {
  const orders = [
    { id: "ORD-1001", customer: "Rahul Sharma", total: "₹4,999", status: "Delivered" },
    { id: "ORD-1002", customer: "Ananya Gupta", total: "₹1,499", status: "Pending" },
    { id: "ORD-1003", customer: "Ravi Kumar", total: "₹2,999", status: "Shipped" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders Page</h1>

     <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersPage;
