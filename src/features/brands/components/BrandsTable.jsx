import React from "react"

const BrandsTable = ({ BrandsData, onEdit, onDelete }) => {
  const truncateText = (text, maxLength = 50) => {
    if (!text) return ""
    return text.length > maxLength ? text.substring(0, maxLength) + " ..." : text
  }

  return (
    <div className="bg-white shadow rounded-2xl overflow-auto">
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
          {BrandsData.map((brand, index) => (
            <tr key={brand._id}>
              <td className="px-3 py-3">{index + 1}</td>
              <td className="px-6 py-3">{brand.name}</td>
              <td className="px-6 py-3">
                <img
                  src={brand.logo}
                  alt="logo"
                  className="w-12 h-12 object-contain rounded border"
                />
              </td>
              <td className="px-6 py-3 text-sm">
                {truncateText(brand.description)}
              </td>
              <td className="px-6 py-3 text-sm">
                {truncateText(brand.fromTheBrand, 75)}
              </td>
              <td className="px-6 py-3 flex gap-2">
                <button
                  onClick={() => onEdit(brand)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(brand)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BrandsTable
