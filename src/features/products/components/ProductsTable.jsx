import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { toast } from 'react-toastify'
import { deleteProduct } from '../../../api/productApi'
import DeleteAlert from './DeleteAlert'

const ProductsTable = ({ productsData ,handelReload }) => {

  const [selected, setSelected] = useState([])
  const [showConfirm, setShowConfirm] = useState(false);
  const [processing, setProcessing] = useState(false)


  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )

  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(productsData.map((p) => p._id))
    } else {
      setSelected([])
    }
  }

 const handleDelete= async ()=>{
       try{
         setProcessing(true)
         let pId=selected?.[0]
       console.log("Deleting IDs:", pId);

       await deleteProduct(pId)
       toast.success("process deleted")
 
       
       setShowConfirm(false);
       if(handelReload) {
         handelReload()
       }
     setSelected([]);
       } catch (err){
         console.error(err.message)
         toast.error(`error happend : ${err.response?.data?.message}`)
         setShowConfirm(false);
       }finally{
         setProcessing(false)
 
       }
     }

  let allSelected = selected.length === productsData.length && productsData.length > 0;
  const isIndeterminate = selected.length && !allSelected


  return (
    <div className='bg-gray-50 shadow overflow-auto'>
      {showConfirm && (
        <DeleteAlert
          processing={processing}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleDelete}
        />

      )}
      {selected.length > 0 && (
        <div className='flex justify-between items-center mb-4 bg-gray-100 p-3 rounded-lg'>
          <p className="text-gray-700">{selected.length} slected</p>

          <div className='flex gap-2'>
            <button
              className='bg-blue-500 px-3 py-1 text-white rounded cursor-pointer hover:bg-blue-600'>Edit</button>
            <button
              onClick={()=>setShowConfirm(true)}
              className='bg-red-500 px-3 py-1 text-white rounded cursor-pointer hover:bg-red-600'>Delete</button>
          </div>
        </div>
      )}


      <table className='w-full'>
        <thead className='bg-gray-50 text-gray-700'>
          <tr>

            <th className=' w-12 px-1 py-3 '>SL No.</th>
            <th className='px-6 py-3 '>
              <input
                type="checkbox"
                checked={allSelected}
                ref={(el) => {
                  if (el) el.indeterminate = isIndeterminate
                }}
                onChange={handleSelectAll}
                className='w-4 h-4' />
            </th>
            <th className='px-6 py-3 text-left'>Product Name</th>
            <th className='px-6 py-3 text-left'>images</th>
            <th className='px-6 py-3 text-left'>slug</th>
            <th className='px-6 py-3 text-left'>Variants</th>
            <th className='px-6 py-3 text-left'>Brand</th>
            <th className='px-6 py-3 text-left'>category</th>
            <th className='px-6 py-3 text-left'>isPromoted</th>
            <th className='px-6 py-3 text-left'>isActive</th>

            <th className='px-6 py-3 text-left'>defaultPrice</th>
            <th className='px-6 py-3 text-left'>details</th>

          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {productsData.map((p, index) => (
            <tr key={p._id}>
              <td className="px-3 py-3">{index + 1}</td>
              <td className="px-3 py-3">
                <input
                  type="checkbox"
                  checked={selected.includes(p._id)}
                  onChange={() => handleSelect(p._id)}
                  className="w-4 h-4" />
              </td>
              <td className="px-3 py-3 font-medium">{p.name}</td>
              <td className="px-3 py-3">
                <img
                  src={p.images[0] || "/no-image.png"}
                  alt={p.name}
                  className="w-12 h-12 object-contain bg-gray-100 rounded"
                />
              </td>
              <td className="px-3 py-3 text-gray-600">{p.slug}</td>
              <td className="px-3 py-3">{p.variants}</td>
              <td className="px-3 py-3">{p.brand?.name}</td>
              <td className="px-3 py-3">{p.category?.name}</td>
              <td className="px-3 py-3">
                {p.isPromoted ? (
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                    Yes
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-700">
                    No
                  </span>
                )}
              </td>
              <td className="px-3 py-3">
                {p.isActive ? (
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-700">
                    Inactive
                  </span>
                )}
              </td>
              {/* <td className="px-3 py-3 font-semibold">₹ { + p.defaultPrice || 'h' }</td> */}
              <td className="px-3 py-3 font-semibold"> {p.defaultPrice ? `₹ ${p.defaultPrice}` : "no Variants"}</td>
              <td className="px-3 py-3">
                <NavLink to={`/products/${p._id}`} >
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600">
                    View

                  </button>

                </NavLink>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable