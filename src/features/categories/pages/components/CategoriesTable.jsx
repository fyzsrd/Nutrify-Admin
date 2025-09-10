import React from 'react'

const CategoriesTable = ({categories}) => {

    

    return (
        <div className='bg-white shadow rounded-2xl overflow-auto'>
            <table className='w-full '>
                <thead className='bg-gray-100 text-gray-700 text-left'>
                    <tr>
                        <th className='px-6 py-3 '>Name</th>
                        <th className='px-6 py-3 '>Parent</th>
                        <th className='px-6 py-3 '>Thumbnail</th>
                        <th className='px-6 py-3 '>Active</th>
                        <th className='px-6 py-3 '>Main</th>
                        <th className='px-6 py-3 '>Actions</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                   {categories.map((c)=>(
                    <tr key={c._id}>
                        <td className='px-6 py-3 font-medium'>{c.name}</td>
                        <td className='px-6 py-3'>{c.parentCategory?.name || "-" }</td>
                        <td className='px-6 py-3'>
                            <img src={c.thumbnail} alt="catimage" />
                        </td>
                        <td className='px-6 py-3'>{c.isActive  ? "✅" : "❌"}</td>
                        <td className='px-6 py-3'>{c.isMain ? "⭐" : "-" }</td>

                        <td className='px-6 py-3'>
                            <button className='px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600'>Edit</button>
                          
                        </td>
                        
                    </tr>

                   ))}
                </tbody>
            </table>
        </div>
    )
}

export default CategoriesTable