"use client";
import { useState } from "react";

export default function OrderConfirmationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Proceed Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Proceed to Order
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold text-gray-800">Confirm Your Order</h2>
            <p className="text-gray-600 mt-2">Are you sure you want to place this order?</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  alert("Order Confirmed!");
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
