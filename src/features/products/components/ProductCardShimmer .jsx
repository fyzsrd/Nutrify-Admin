import React from "react";

const ProductCardShimmer = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex gap-6 animate-pulse">
      {/* Thumbnail */}
      <div className="w-32 h-32 rounded-lg bg-gray-200 border" />

      {/* Content */}
      <div className="flex-1">
        {/* Title */}
        <div className="h-6 w-48 bg-gray-200 rounded mb-2" />
        {/* Slug */}
        <div className="h-4 w-32 bg-gray-200 rounded" />

        {/* Tags */}
        <div className="mt-3 flex gap-2 flex-wrap">
          <div className="h-5 w-16 bg-gray-200 rounded" />
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-5 w-14 bg-gray-200 rounded" />
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardShimmer;
