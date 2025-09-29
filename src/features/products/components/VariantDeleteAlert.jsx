import React from 'react';

const VariantDeleteAlert = ({ onCancel, onConfirm,processing }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          Do you want to delete?
        </h1>
        <p className="text-gray-600 mb-6">This action cannot be undone.</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {processing ? "deleting..." : "delete" }
          </button>
        </div>
      </div>
    </div>
  );
};

export default VariantDeleteAlert;
