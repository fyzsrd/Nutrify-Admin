import React from 'react'

const ImagesGrid = ({images}) => {
    console.log(images)
  return (
    <div className="bg-white shadow rounded-xl p-6 w-full">
      <h2 className="text-lg font-semibold mb-4">Product Images</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="product"
            className="w-full h-40 object-contain rounded border bg-gray-50"
          />
        ))}
      </div>
    </div>
  )
}

export default ImagesGrid