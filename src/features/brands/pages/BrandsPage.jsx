import React, { useState } from "react"
import BrandsTable from "../components/BrandsTable"
import BrandModal from "../components/BrandModal"
import DeleteConfirmModal from "../components/DeleteConfirmModal"

const BrandsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState("add") // "add" or "edit"
  const [selectedBrand, setSelectedBrand] = useState(null)

  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  // Dummy Data
  const BrandsData = [
    {
      _id: "689ac08dcc6ae734c61524bf",
      name: "Avvatar",
      logo: "https://example.com/images/avvatar-logo.png",
      description:
        "Avvatar is a premium nutrition brand committed to delivering science-backed supplements to fuel your fitness and wellness journey.",
      fromTheBrand:
        "At Avvatar, we focus on purity, potency, and performance, helping you achieve your health goals with trusted formulations.",
    },
    {
      _id: "689ac0b6cc6ae734c61524c4",
      name: "MuscleBlaze",
      logo: "https://example.com/images/muscleblaze-logo.png",
      description:
        "MuscleBlaze is India’s leading sports nutrition brand, offering a wide range of high-quality supplements to help you build muscle and enhance performance.",
      fromTheBrand:
        "At MuscleBlaze, we are dedicated to supporting your fitness journey with science-backed products that deliver real results.",
    },
  ]

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
        BrandsData={BrandsData}
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
