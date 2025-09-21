import React from "react";

const VariantsTableShimmer = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {Array.from({ length: 9 }).map((_, idx) => (
              <th key={idx} className="px-4 py-2">
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, rowIdx) => (
            <tr key={rowIdx} className="border-t">
              {Array.from({ length: 9 }).map((_, colIdx) => (
                <td key={colIdx} className="px-4 py-2">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VariantsTableShimmer;
