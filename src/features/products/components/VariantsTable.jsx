import React, { useState } from "react";
import noProductsFound from '../../../assets/json/WjhEybDM3L.json'
import Lottie from "lottie-react";
import VariantDeleteAlert from "./VariantDeleteAlert";
import { deleteVariant } from "../api/variantApi";
import { toast } from "react-toastify";

const VariantsTable = ({ variants,addVariant,onVariantDeleted }) => {
  const [selected,setSelected]=useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const[processing,setProcessing]=useState(false)

    const handleDelete= async ()=>{
      try{
        setProcessing(true)
        let vId=selected?.[0]
      console.log("Deleting IDs:", vId);
      await deleteVariant(vId)
      toast.success("process deleted")

      
      setShowConfirm(false);
      if(onVariantDeleted) {
        onVariantDeleted()
      }
    setSelected([]);
      } catch (err){
        console.log(err)
        toast.error("error happend" + err.message)
      }finally{
        setProcessing(false)

      }
    }

  // Handle single row select
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(variants.map((v) => v._id));
    } else {
      setSelected([]);
    }
  };

   const allSelected = selected.length === variants.length && variants.length > 0;
  const isIndeterminate = selected.length > 0 && !allSelected;


  if (!variants || variants.length === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-6 text-center text-gray-500 flex flex-col justify-center items-center">
        <Lottie animationData={noProductsFound} loop={true} className='w-40 h-40 mb-4 opacity-90' />
        <p className="text-lg font-medium">No variants added yet</p>
        <p className="text-sm text-gray-400 mt-1">Start by adding a new variant</p>
        <button
        onClick={addVariant}
         className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add Variant
        </button>
      </div>
    );
  }
  
  return (
    
    <div className="bg-white shadow rounded-xl p-6">

      {showConfirm && (
  <VariantDeleteAlert
  processing={processing}
    onCancel={() => setShowConfirm(false)}
    onConfirm={handleDelete}
  />
)}
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <button
        onClick={addVariant}
         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          + Add Variant
        </button>
      </div>

      {/* Bulk Actions Bar */}
      {selected.length > 0 && (
        <div className="flex justify-between items-center mb-4 bg-gray-100 p-3 rounded-lg">
          <p className="text-gray-700">
            {selected.length} selected
          </p>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Edit
            </button>
            <button
            onClick={()=>setShowConfirm(true)}
             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
             <th className="px-4 py-2 text-left">
              <input
              checked={allSelected}
               ref={(el) => {
                  if (el) el.indeterminate = isIndeterminate;
                }}
              
                onChange={handleSelectAll}
               className="w-4 h-4" type="checkbox" />
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
                <input
                
                 type="checkbox"
                 checked={selected.includes(v._id)}
                 onChange={()=> handleSelect(v._id)}
                 
                  />
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
