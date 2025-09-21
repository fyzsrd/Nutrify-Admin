import React from "react";

const ImagesGridShimmer = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 w-full animate-pulse">
      <h2 className="h-5 w-40 bg-gray-200 rounded mb-4"></h2>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="w-full h-40 rounded border bg-gray-200"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImagesGridShimmer;
