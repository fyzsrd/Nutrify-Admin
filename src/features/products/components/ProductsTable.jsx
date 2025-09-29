import React from 'react'
import { NavLink } from 'react-router'

const ProductsTable = ({ productsData }) => {
  

  return (
    <div className='bg-gray-50 shadow overflow-auto'>
      <table className='w-full'>
        <thead className='bg-gray-50 text-gray-700'>
          <tr>

            <th className=' w-12 px-1 py-3 '>SL No.</th>
            <th className='px-6 py-3 '>
              <input type="checkbox" className='w-4 h-4' />
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
                <input type="checkbox" className="w-4 h-4" />
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