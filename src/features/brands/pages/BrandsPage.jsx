import React, { useEffect, useState } from "react"
import BrandsTable from "../components/BrandsTable"
import BrandModal from "../components/BrandModal"
import DeleteConfirmModal from "../components/DeleteConfirmModal"
import { getBrands } from "../../../api/brandApi"

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState("add") // "add" or "edit"
  const [selectedBrand, setSelectedBrand] = useState(null)

  const [isDeleteOpen, setIsDeleteOpen] = useState(false)



  useEffect(()=>{
    fetBrands();
  },[])

  const fetBrands=async ()=>{
    try{
      setLoading(true)
      const res= await getBrands();
      
      setBrands(res.data.data)
      

    }catch(err) {
       console.error(err);
      setError(err?.response?.data?.message ?? "Failed to fetch brands");
    }finally {
      setLoading(false);
    }
  }

  // Handlers
  const handleAddBrand = () => {
    setModalMode("add")
    setSelectedBrand(null)
    setIsModalOpen(true)
  }

  const handleEditBrand = (brand) => {
    setModalMode("edit")
    setSelectedBrand(brand)
    setIsModalOpen(true)
  }

  const handleDeleteBrand = (brand) => {
    setSelectedBrand(brand)
    setIsDeleteOpen(true)
  }

  const handleSave = (formData) => {
    if (modalMode === "add") {
      console.log("Adding brand:", formData)
    } else {
      console.log("Updating brand:", formData)
    }
    setIsModalOpen(false)
  }

  const confirmDelete = () => {
    console.log("Deleting brand:", selectedBrand)
    setIsDeleteOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Brands</h1>
        <button
          onClick={handleAddBrand}
          className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
        >
          + Add Brand
        </button>
      </div>

      <BrandsTable
        BrandsData={brands}
        onEdit={handleEditBrand}
        onDelete={handleDeleteBrand}
      />

      {isModalOpen && (
        <BrandModal
          mode={modalMode}
          initialData={selectedBrand}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {isDeleteOpen && (
        <DeleteConfirmModal
          brand={selectedBrand}
          onCancel={() => setIsDeleteOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default BrandsPage
