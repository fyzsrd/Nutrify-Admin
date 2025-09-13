import React from "react";
import { useParams } from "react-router";


const ProductDetailPage = () => {
  const { id } = useParams(); // product id from URL

  // mock data
  const product = {
    _id: id,
    name: "Gold Standard Whey",
    variants: [
      { _id: "v1", weight: "2lb", flavor: "Chocolate", price: 2999, stock: 10 },
      { _id: "v2", weight: "5lb", flavor: "Vanilla", price: 5999, stock: 5 },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">{product.name} - Variants</h1>

      <button className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        + Add Variant
      </button>

      <table className="w-full bg-white shadow rounded-2xl overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3">Weight</th>
            <th className="px-6 py-3">Flavor</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Stock</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.variants.map((v) => (
            <tr key={v._id} className="border-t">
              <td className="px-6 py-3">{v.weight}</td>
              <td className="px-6 py-3">{v.flavor}</td>
              <td className="px-6 py-3">₹{v.price}</td>
              <td className="px-6 py-3">{v.stock}</td>
              <td className="px-6 py-3">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600 mr-2">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailPage;
