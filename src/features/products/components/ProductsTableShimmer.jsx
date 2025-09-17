import React from "react";

const ProductsTableShimmer = () => {
  const rows = Array(6).fill(null); // 6 shimmer rows

  return (
    <div className="bg-gray-50 shadow overflow-auto animate-pulse">
      <table className="w-full">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="w-12 px-1 py-3">SL No.</th>
            <th className="px-6 py-3">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
            </th>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">images</th>
            <th className="px-6 py-3">slug</th>
            <th className="px-6 py-3">Variants</th>
            <th className="px-6 py-3">Brand</th>
            <th className="px-6 py-3">category</th>
            <th className="px-6 py-3">isPromoted</th>
            <th className="px-6 py-3">isActive</th>
            <th className="px-6 py-3">defaultPrice</th>
            <th className="px-6 py-3">details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((_, i) => (
            <tr key={i}>
              <td className="px-3 py-3">
                <div className="w-6 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-32 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-12 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="px-3 py-3">
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTableShimmer;
