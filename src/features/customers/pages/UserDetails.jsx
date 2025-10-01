import React from "react";
import { useParams } from "react-router";
import UserAddress from "../components/UserAddress";

const UserDetails = () => {
    const { id } = useParams();

    // Dummy user data (in real case fetch from API using `id`)

    const user = {
        name: "Fayaz",
        mobile: "94111141139",
        email: "fayaz@example.com",
        isVerified: true,
        isBlocked: false,
        
       
    };

    const orders = [
        {
            orderId: "ORD001",
            date: "2024-09-21",
            total: "₹2500",
            status: "Delivered",
        },
        {
            orderId: "ORD002",
            date: "2024-10-01",
            total: "₹1400",
            status: "Processing",
        },
    ];

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">User Details</h1>

            {/* 🔹 Profile Section */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="bg-white shadow-md rounded-lg p-4 col-span-1">
                    <h2 className="text-lg font-semibold mb-3">Profile</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> user.name</p>
                        <p><strong>Mobile:</strong> user.mobile</p>
                        <p><strong>Email:</strong> user.email</p>
                        <p>
                            <strong>Status:</strong>{" "}
                          
                                <span className="text-red-600 font-medium">Blocked</span>
                       
                                <span className="text-green-600 font-medium">Active</span>
                          
                        </p>
                        <p>
                            <strong>Verified:</strong>{" "}
                            {user.isVerified ? "✅ Yes" : "❌ No"}
                        </p>
                        <p><strong>Joined:</strong> {user.createdAt}</p>
                    </div>
                </div>

                {/* Address Card */}
              
                <div className="bg-white shadow-md rounded-lg p-4 col-span-2">
                    <h2 className="text-lg font-semibold mb-3">Addresses</h2>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                       <UserAddress />
                       

                        
                    </div>
                </div>
            </div>

            {/* 🔹 Orders Table Section */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse rounded-lg text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Order ID</th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Total</th>
                                <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.orderId} className="odd:bg-white even:bg-gray-50">
                                    <td className="px-4 py-2">{order.orderId}</td>
                                    <td className="px-4 py-2">{order.date}</td>
                                    <td className="px-4 py-2">{order.total}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "Processing"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
