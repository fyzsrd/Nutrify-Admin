import React from 'react'
import BrandsTable from '../components/BrandsTable'

const BrandsPage = () => {

   const BrandsData= [
        {
            "_id": "689ac08dcc6ae734c61524bf",
            "name": "Avvatar",
            "logo": "https://example.com/images/avvatar-logo.png",
            "description": "Avvatar is a premium nutrition brand committed to delivering science-backed supplements to fuel your fitness and wellness journey.",
            "fromTheBrand": "At Avvatar, we focus on purity, potency, and performance, helping you achieve your health goals with trusted formulations."
        },
        {
            "_id": "689ac0b6cc6ae734c61524c4",
            "name": "MuscleBlaze",
            "logo": "https://example.com/images/muscleblaze-logo.png",
            "description": "MuscleBlaze is India’s leading sports nutrition brand, offering a wide range of high-quality supplements to help you build muscle and enhance performance.",
            "fromTheBrand": "At MuscleBlaze, we are dedicated to supporting your fitness journey with science-backed products that deliver real results."
        },
        {
            "_id": "689ac0becc6ae734c61524c7",
            "name": "Optimum Nutrition",
            "logo": "https://example.com/images/optimum-nutrition-logo.png",
            "description": "Optimum Nutrition (ON) is a globally trusted brand known for its premium quality sports nutrition products, including the world-famous Gold Standard Whey Protein.",
            "fromTheBrand": "At Optimum Nutrition, we focus on delivering superior nutrition and consistent quality to help athletes and fitness enthusiasts reach their peak."
        },
        {
            "_id": "68a5cf205430bc433d9b5ca6",
            "name": "Dymatize Nutrition",
            "logo": "https://example.com/images/dymatize-logo.png",
            "description": "Dymatize Nutrition is a leading sports nutrition brand recognized for its scientifically formulated, high-quality protein powders, including the popular ISO100 Hydrolyzed Whey Protein.",
            "fromTheBrand": "At Dymatize, we are committed to creating innovative, research-backed nutrition solutions that fuel performance, recovery, and strength for athletes and fitness enthusiasts worldwide."
        },
        {
            "_id": "68b830b84c3251217ca8e04f",
            "name": "One Science Nutrition",
            "logo": "https://example.com/images/one-science-logo.png",
            "description": "One Science Nutrition (OSN) is a premium sports nutrition brand dedicated to delivering scientifically advanced supplements. With a strong focus on innovation and quality, OSN products are designed to support muscle growth, endurance, recovery, and overall performance.",
            "fromTheBrand": "At One Science Nutrition, we believe in combining cutting-edge science with pure, high-grade ingredients to create supplements that help athletes and fitness enthusiasts reach their true potential."
        }
    ]
  return (
    <div>
        <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Brands</h1>
        <button 
        className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600'
        >+ Add Brands</button>
      </div>

        <BrandsTable BrandsData={BrandsData}/>
    </div>
  )
}

export default BrandsPage