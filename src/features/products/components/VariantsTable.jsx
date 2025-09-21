import React from "react";
import noProductsFound from '../../../assets/json/WjhEybDM3L.json'
import Lottie from "lottie-react";

const VariantsTable = ({ variants }) => {
  if (!variants || variants.length === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-6 text-center text-gray-500 flex flex-col justify-center items-center">
        <Lottie animationData={noProductsFound} loop={true} className='w-40 h-40 mb-4 opacity-90' />
        <p className="text-lg font-medium">No variants added yet</p>
        <p className="text-sm text-gray-400 mt-1">Start by adding a new variant</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add Variant
        </button>
      </div>
    );
  }
  
  return (
    
    <div className="bg-white shadow rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add Variant
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
             <th className="px-4 py-2 text-left">
              <input className="w-4 h-4" type="checkbox" />
             </th>
            <th className="px-4 py-2 text-left">slno</th>
            <th className="px-4 py-2 text-left">image</th>
            
              <th className="px-1 py-2 text-left">weightType</th>
              
            <th className="px-4 py-2 text-left">Weight</th>
            <th className="px-4 py-2 text-left">Flavor</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">SKU</th>
            <th className="px-4 py-2 text-left">Default</th>
          </tr>
        </thead>
        <tbody>
          
         
          {variants.map((v,index) => (
            <tr key={v._id} className="border-t">
               <td className="px-4 py-2">
                <input type="checkbox" />
               </td>
               <td className="px-4 py-2">{index + 1}</td>
               <th className="px-4 py-2 ">
                
                <img 
                src={v.images} alt="image" 
                className="w-10 contain-content h-10"  />
               </th>
            
               <td className="px-4 py-2">{v.weightType}</td>
               
              <td className="px-4 py-2">{v.weight} </td>
              <td className="px-4 py-2">{v.flavor}</td>
              <td className="px-4 py-2 font-semibold">₹{v.price}</td>
              <td className="px-4 py-2">{v.stock}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{v.sku}</td>
              <td className="px-4 py-2">
                {v.isDefault ? (
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                    Yes
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-700">
                    No
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VariantsTable;
