import React, { useEffect, useState } from 'react'
import ProductsTable from '../components/ProductsTable'
import { getProducts } from '../../../api/productApi'
import ProductsTableShimmer from '../components/ProductsTableShimmer'
import noProductsFound from '../../../assets/json/WjhEybDM3L.json'
import Lottie from 'lottie-react'

const ProductsPage = () => {
  const [loading, setLoading] = useState(false)
  const [productsData, setProductsData] = useState([])


  useEffect(() => {
    fetchProducts()
  }, [])
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const res = await getProducts()
      setProductsData(res.data.data)
      

    } catch (err) {
      console.error(err)
    }
    finally {

      setLoading(false)
    }
  }




  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600'
        >+ Add Products</button>
      </div>

      {loading ? <ProductsTableShimmer /> : productsData.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg shadow'>
        
         <Lottie animationData={noProductsFound} loop={true}  className='w-40 h-40 mb-4 opacity-90'/>
          <h2 className='text-lg font-semibold text-gray-600'>Noproducts Found</h2>
          <p className='text-gray-600 text-sm mt-1'>start adding products </p>
          <button
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600'> + add products</button>
        </div>
      ):(
        <ProductsTable productsData={productsData} />
      )}

    </div>
  )
}

export default ProductsPage