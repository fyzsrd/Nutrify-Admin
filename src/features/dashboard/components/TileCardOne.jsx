import React from "react";

const TileCardOne = ({ title, value, change, icon, color }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition">
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${color}`}>
        {icon}
      </div>
      <div className="flex items-end justify-between mt-5">
        <div>
          <span className="text-sm text-gray-500 font-medium">{title}</span>
          <h4 className="mt-2 font-bold text-2xl text-gray-900">{value}</h4>
        </div>
        <span className="inline-flex bg-green-100 rounded px-2 py-1 text-xs text-green-700 font-medium">
          {change}
        </span>
      </div>
    </div>
  );
};

export default TileCardOne;
