import React from 'react'

const ProductDetailsCard = ({productData}) => {
  return (
     <div className="bg-white shadow rounded-xl p-6 space-y-3">
      <h2 className="text-lg font-semibold">Product Details</h2>
      <p><strong>Description:</strong> {productData.description}</p>
      <p><strong>How to Use:</strong> {productData.howtoUse}</p>
      <p><strong>Manufacturer:</strong> {productData.manufactureInfo}</p>
      <p><strong>Importer:</strong> {productData.importerInfo}</p>
      <p><strong>Country:</strong> {productData.countryInfo}</p>
      <p><strong>FSSAI:</strong> {productData.fssaiNumber}</p>
    </div>
  )
}

export default ProductDetailsCard