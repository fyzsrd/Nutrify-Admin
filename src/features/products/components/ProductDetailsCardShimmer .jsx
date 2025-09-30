import React from "react";

const ProductDetailsCardShimmer = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 space-y-3 animate-pulse">
      <div className="h-5 w-40 bg-gray-200 rounded"></div>
      <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
    </div>
  );
};

export default ProductDetailsCardShimmer;
