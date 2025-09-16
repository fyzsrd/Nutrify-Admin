import React, { useState } from "react";

const CategoriesTable = ({ categoryData,onEdit,onDelete }) => {
  const [expanded, setExpanded] = useState({});
  

  // toggle expand/collapse
  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // recursive row renderer
  const renderRows = (categories, level = 0, parentIndex = "") => {
    return categories.map((c, index) => {
      const rowIndex = parentIndex ? `${parentIndex}. ${index + 1}` : `${index + 1}`;
      const hasChildren = c.subCategories && c.subCategories.length > 0;

      return (
        <React.Fragment key={c._id}>
          <tr className={level > 0 ? "bg-gray-100" : ""}>
            <td className="px-4 py-3 font-medium">
              {rowIndex}
            </td>
            <td className="px-4 py-3">
              {hasChildren && (
                <button
                  onClick={() => toggleExpand(c._id)}
                  className="text-blue-500 font-bold"
                >
                  {expanded[c._id] ? "−" : "+"}
                </button>
              )}
            </td>
            <td className="px-4 py-3" style={{ paddingLeft: `${level * 20}px` }}>
              {c.name}
            </td>
            <td className="px-4 py-3">{c.parentCategory?.name || "-"}</td>
            <td className="px-4 py-3">
              <img
                src={c.thumbnail}
                alt="thumb"
                className="w-12 h-12 object-contain rounded border"
              />
            </td>
            <td className="px-4 py-3">{c.isActive ? "✅" : "❌"}</td>
            <td className="px-4 py-3">{c.isMain ? "⭐" : "-"}</td>
            <td className="px-4 py-3">
              <button 
              onClick={()=>onEdit(c)}
              className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 mr-2">
                Edit
              </button>
              <button 
              onClick={()=>onDelete(c)}
               className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>

          {/* Render children if expanded */}
          {hasChildren && expanded[c._id] && renderRows(c.subCategories, level + 1, rowIndex)}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="bg-white shadow rounded-2xl overflow-auto">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="px-4 py-3">SL No.</th>
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Parent</th>
            <th className="px-4 py-3">Thumbnail</th>
            <th className="px-4 py-3">Active</th>
            <th className="px-4 py-3">Main</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {renderRows(categoryData)}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
