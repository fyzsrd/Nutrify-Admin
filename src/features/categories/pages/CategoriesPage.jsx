import React, { useState } from 'react'
import CategoriesTable from './components/CategoriesTable'
import CategoryAddFormModal from './components/CategoryAddFormModal';

const CategoriesPage = () => {

  const [isModalOpen,setIsModalOpen]=useState(false)
   const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAdd=()=>{
     setSelectedCategory(null);
    setIsModalOpen(true)
  }
  

  const categories = [
    { _id: "1", name: "Protein", parentCategory: null, thumbnail: "/images/protein.png", isActive: true, isMain: true },
    { _id: "2", name: "Vitamins", parentCategory: null, thumbnail: "/images/vitamins.png", isActive: true, isMain: false },
    { _id: "3", name: "Whey Protein", parentCategory: { name: "Protein" }, thumbnail: "/images/whey.png", isActive: true, isMain: false },
  ];
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Catgegories</h1>
        <button 
        onClick={handleAdd}
        className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600'>+ Add categories</button>
      </div>
        
        
        <CategoriesTable categories={categories} />

        {isModalOpen && (<CategoryAddFormModal onClose={()=>setIsModalOpen(false)}/>)}
    </div>
  )
}

export default CategoriesPage