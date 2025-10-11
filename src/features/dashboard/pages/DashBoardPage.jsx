import React, { useEffect, useState } from "react";
import TileCardOne from "../components/TileCardOne";
import { User, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";
import { getdashBoardData } from "../api/dashBoardApi";


const DashBoardPage = () => {
  const [dashboardData, setDasboardData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchdashStats()
  }, [])
  const fetchdashStats = async () => {
    try {
      setLoading(true)
      const res = await getdashBoardData()
      setDasboardData(res.data?.data)

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  console.log(dashboardData)

  const stats = [
    {
      title: "Customers",
      value: dashboardData.userCount,
      icon: <User className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Orders",
      value: dashboardData.order,
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Revenue",
      value: dashboardData.revenue,
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Products",
      value: dashboardData.productCount,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
  ];

   // If still loading or no data yet
  if (loading) {
    return <div className="p-8 text-gray-500 text-center">Loading dashboard...</div>;
  }

  if (!dashboardData) {
    return <div className="p-8 text-gray-500 text-center">No data found</div>;
  }

  return (
    <div className="p-6 md:p-8 bg-gray-50 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Quick summary of your business performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <TileCardOne key={index} {...stat} />
        ))}
      </div>

      {/* Example Future Section */}
      <div className="mt-10">
        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Orders</h2>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
