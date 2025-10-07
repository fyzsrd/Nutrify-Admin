import React, { useEffect, useState } from 'react'
import UserTable from '../components/UserTable'
import { getUsers } from '../api/customerApi'
import UserTableShimmer from '../components/UserTableShimmer'


const CustomersPage = () => {
  const [loading,setLoading]=useState(false)
  const [usersData,setUsersData]=useState([])

  useEffect(()=>{
    fetchUsers()
  },[])
  const fetchUsers=async ()=>{
    try{
      setLoading(true)
      const res=await getUsers()

      setUsersData(res.data.data)
      

    } catch(err){
      console.log("erorr happend: ",err)

    }finally{
      setLoading(false)

    }
  }

  return (
    <div>
        <div>
          <h1 className='text-2xl font-bold mb-2.5'>customers</h1>
        </div>

        {loading 
        ? (<UserTableShimmer />) 
        : <UserTable usersData={usersData} />}
        
    </div>
  )
}

export default CustomersPage