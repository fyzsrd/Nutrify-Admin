
import React from 'react'

const BrandsTable = ({ BrandsData }) => {
    const truncateText = (text, maxLength = 50) => {
        if (!text) return "loading"
        return text.length > maxLength ? text.substring(0, maxLength) + " ..." : text
    }


    return (
        <div className='bg-white shadow rounded-2xl overflow-auto'>
            <table className='w-full'>
                <thead className='bg-gray-100 text-gray-700'>
                    <tr>
                        <th className=' w-12 px-1 py-3'>Sl No</th>
                        <th className='w-12 px-1 py-3'>
                            <input className='w-4 h-4' type="checkbox" />
                        </th>
                        <th className='px-6 py-3'>name</th>
                        <th className='px-6 py-3'>logo</th>
                        <th className='px-6 py-3'>description</th>
                        <th className='px-6 py-3'>fromTheBrand</th>
                        <th className='px-6 py-3'>Actions</th>

                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                    {BrandsData.map((brands, index) => (
                        <tr>
                            <th className=' px-1 py-3'>{index + 1}</th>
                            <th className=' px-1 py-3'>
                                <input className='w-4 h-4' type="checkbox" />
                            </th>
                            <th className='px-6 py-3'>{brands.name}</th>
                            <th className='px-6 py-3'>
                                <img src={brands.logo} alt="logo" className='bg-amber-100 w-12 h-12 object-contain rounded' />
                            </th>
                            <th className='px-6 py-3 text-sm'>{truncateText(brands.description)}</th>
                            <th className='px-6 py-3 text-sm'>{truncateText(brands.fromTheBrand, 75)}</th>
                            <th className='px-6 py-3'> <button className='px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600'>Edit</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BrandsTable