import React from "react";

const DeleteConfirmModal = ({ title = "Delete", message, onCancel, onConfirm, loading }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {title} Confirmation
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          {message || "Are you sure you want to delete this item? This action cannot be undone."}
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md flex items-center gap-2"
          >
            {loading && (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l-3 3 3 3v4a8 8 0 01-8-8z"
                ></path>
              </svg>
            )}
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
