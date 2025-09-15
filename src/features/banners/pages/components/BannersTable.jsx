import React from 'react'

const BannersTable = () => {
  return (
    <div className='bg-gray-50 shadow rounded'>
        <table className='w-full'>
            <thead className='text-left'>
                <tr>
                    <th className='w-12 px-1 py-3'>Sl No</th>
                     <th className=' w-12 px-6 py-3'>
                        <input className='w-4 h-4' type="checkbox" />
                     </th>
                     <th className='px-6 py-3'>Banner Name</th>
                     <th className='px-6 py-3'>Banner Category</th>
                     <th className='px-6 py-3'>Banner Link</th>
                     <th className='px-6 py-3'>status</th>
                     <th className='px-6 py-3'>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className='px-6 py-3'>1</td>
                    <td className='px-6 py-3'>
                         <input className='w-4 h-4' type="checkbox" />
                    </td>
                    <td className='px-6 py-3'>promotional Banner</td>
                    <td className='px-6 py-3'>promotional</td>
                    <td className='px-6 py-3'>Links</td>
                    <td className='px-6 py-3'>Deactivated</td>
                    <td  className='px-6 py-3'>
                         <button className='px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600'>Edit</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default BannersTable