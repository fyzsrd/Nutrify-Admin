import React from 'react'
import UserTable from '../components/UserTable'

const CustomersPage = () => {
  return (
    <div>
        <div>
          <h1 className='text-2xl font-bold mb-2.5'>customers</h1>
        </div>

        <UserTable />
    </div>
  )
}

export default CustomersPage