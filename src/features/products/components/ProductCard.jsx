import React from "react";

const ProductCard = ({ product }) => {
   if (!product || !product._id) {
    return (
      <div className="bg-white shadow rounded-xl p-6 text-gray-500">
        Loading product details...
      </div>
    );
  }

  
  return (
    <div className="bg-white shadow rounded-xl p-6 flex gap-6">
      <img
        src={product.defaultThumbnail || "/no-image.png"}
        alt={product.name}
        className="w-32 h-32 object-contain rounded-lg bg-gray-50 border"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-sm">{product.slug}</p>

        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
            {product.brand?.name}
          </span>
          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
            {product.category?.name}
          </span>
          {product.isPromoted && (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
              Promoted
            </span>
          )}
        </div>

        <div className="mt-4 font-semibold text-lg">
          ₹{product.defaultPrice}{" "}
          <span className="line-through text-gray-400 text-sm">
            ₹{product.defaultMrp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
