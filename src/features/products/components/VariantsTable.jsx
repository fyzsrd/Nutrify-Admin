import React from "react";

const VariantsTable = ({ variants }) => {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add Variant
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 text-left">Weight</th>
            <th className="px-4 py-2 text-left">Flavor</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">SKU</th>
            <th className="px-4 py-2 text-left">Default</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((v) => (
            <tr key={v._id} className="border-t">
              <td className="px-4 py-2">{v.weight} {v.weightType}</td>
              <td className="px-4 py-2">{v.flavor}</td>
              <td className="px-4 py-2 font-semibold">₹{v.price}</td>
              <td className="px-4 py-2">{v.stock}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{v.sku}</td>
              <td className="px-4 py-2">
                {v.isDefault ? (
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                    Yes
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-700">
                    No
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VariantsTable;
