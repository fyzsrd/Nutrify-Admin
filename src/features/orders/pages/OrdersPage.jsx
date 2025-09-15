import React from "react";

const OrdersPage = () => {
  const orders = [
    { id: "ORD-1001", customer: "Rahul Sharma", total: "₹4,999", status: "Delivered" },
    { id: "ORD-1002", customer: "Ananya Gupta", total: "₹1,499", status: "Pending" },
    { id: "ORD-1003", customer: "Ravi Kumar", total: "₹2,999", status: "Shipped" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders Page</h1>

      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((o, index) => (
              <tr
                key={o.id}
                className={`hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{o.id}</td>
                <td className="px-6 py-4">{o.customer}</td>
                <td className="px-6 py-4">{o.total}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        o.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : o.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
