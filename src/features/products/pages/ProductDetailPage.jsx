import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import VariantsTable from "../components/VariantsTable";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ImagesGrid from "../components/ImagesGrid";
import { getProductDetails } from "../../../api/productApi";
import { useParams } from "react-router";
import ProductCardShimmer from "../components/ProductCardShimmer ";
import VariantsTableShimmer from "../components/VariantsTableShimmer ";
import ImagesGridShimmer from "../components/ImagesGridShimmer";
import ProductDetailsCardShimmer from "../components/ProductDetailsCardShimmer ";

const ProductDetailPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("product");
  const [productDetails, setProductDetails] = useState({
    variants: [],
    images: [],
    brand: {},
    category: {},
  })




  useEffect(() => {
    fetchProductDetail()
  }, [])

  const fetchProductDetail = async () => {
    try {
      const res = await getProductDetails(id)
      setProductDetails(res.data.data)


    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }

  }


  return (
    <div className="space-y-6 bg-blue-50">
      {/* Tabs Header */}

      <div className="flex gap-4 border-b ">
        <button
          onClick={() => setActiveTab("product")}
          className={`px-4 py-2 font-medium ${activeTab === "product"
            ? "border-b-2 border-blue-500 text-blue-600"
            : "text-gray-600"
            }`} >
          product</button>

        <button
          onClick={() => setActiveTab("images")}
          className={`px-4 py-2 font-medium ${activeTab === "images"
            ? "border-b-2 border-blue-500 text-blue-600"
            : "text-gray-600"
            }`}
        >
          Images & Details
        </button>

      </div>

      {activeTab === "product" && (
        <div className="space-y-6">
          {loading ?
            (
              <>
                <ProductCardShimmer />
                <VariantsTableShimmer />
              </>
            ) : (
              <>
                <ProductCard product={productDetails} />

                <VariantsTable variants={productDetails.variants} />
              </>
            )}


        </div>
      )}


      {activeTab === "images" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {loading ? (
            <>
              <ImagesGridShimmer />
              <ProductDetailsCardShimmer />
            </>
          ) : (
            <>
              <ImagesGrid images={productDetails.images} />

              <ProductDetailsCard productData={productDetails} />
            </>
          )}

        </div>
      )}


    </div>
  );
};

export default ProductDetailPage;
