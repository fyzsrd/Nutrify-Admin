import React from 'react'
import ProductsTable from '../components/ProductsTable'

const ProductsPage = () => {
  const productsData = [
    {
      _id: "68b837c97ff80b82fba4ec31",
      name: "One Science Premium Whey Protein",
      slug: "one-science-premium-whey-protein",
      category: "Whey Protien",
      variants:10,
      isPromoted: true,
      isActive: false,
      images: [
        "https://example.com/images/osn-premium-whey-front.jpg",
      ],
      thumbnail: [
        "https://fitnesstack.com/wp-content/uploads/2024/03/One-Science-ISO-Gold-Whey-5-Lbs-Chocolate-Charge.png",
      ],
      defaultPrice: 2949,
    },
    {
      _id: "68b9a7cf985ff4e17d536f75",
      name: "Optimum Nutrition BCAA 5000 Powder",
      slug: "optimum-nutrition-bcaa-5000-powder",
      category: "BCAA",
      variants:1,
      isPromoted: true,
      isActive: true,
      images: [],
      thumbnail: [
        "https://fitnesstack.com/wp-content/uploads/2024/03/Optimum-Nutrition-BCAA-5000-Powder-Fruit-Punch-30-Servings.jpg",
      ],
      defaultPrice: 1149,
    },
  ];
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600'
        >+ Add Products</button>
      </div>

      <ProductsTable productsData={productsData}/>

    </div>
  )
}

export default ProductsPage