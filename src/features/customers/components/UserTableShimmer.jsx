import React from "react"

const UserTableShimmer = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse rounded-lg shadow-md overflow-hidden text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">Sl No</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">Mobile</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">First Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">isVerified</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">isBlocked</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 uppercase text-xs">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
            >
              <td className="px-4 py-2">
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-4 py-2">
                <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-4 py-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-4 py-2">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-4 py-2">
                <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
              </td>
              <td className="px-4 py-2">
                <div className="h-5 w-14 bg-gray-200 rounded-full animate-pulse"></div>
              </td>
              <td className="px-4 py-2">
                <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTableShimmer
