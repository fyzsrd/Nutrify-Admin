import React from "react"

const BrandsTableShimmer = () => {
  return (
    <div className="bg-white shadow rounded-2xl overflow-auto animate-pulse">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-3 py-3">Sl No</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Logo</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">From The Brand</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              {/* Sl No */}
              <td className="px-3 py-3">
                <div className="h-4 w-6 bg-gray-200 rounded"></div>
              </td>

              {/* Name */}
              <td className="px-6 py-3">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </td>

              {/* Logo */}
              <td className="px-6 py-3">
                <div className="w-12 h-12 bg-gray-200 rounded border"></div>
              </td>

              {/* Description */}
              <td className="px-6 py-3">
                <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </td>

              {/* From The Brand */}
              <td className="px-6 py-3">
                <div className="h-4 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
              </td>

              {/* Actions */}
              <td className="px-6 py-3 flex gap-2">
                <div className="h-6 w-12 bg-gray-200 rounded"></div>
                <div className="h-6 w-12 bg-gray-200 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BrandsTableShimmer
