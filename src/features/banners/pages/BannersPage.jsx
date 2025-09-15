import React from 'react'
import BannersTable from './components/BannersTable'

const BannersPage = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-bold'>Banners</h1>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600'
                >+ Add Banners</button>
            </div>
            

            <BannersTable />
        </div>
    )
}

export default BannersPage