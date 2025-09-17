import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import VariantsTable from "../components/VariantsTable";

const ProductDetailPage = () => {
  const [activeTab, setActiveTab] = useState("product");

  const product = {
    _id: "68b837c97ff80b82fba4ec31",
    name: "One Science Premium Whey Protein",
    slug: "one-science-premium-whey-protein",
    brand: { name: "One Science Nutrition" },
    category: { name: "Protein Powders" },
    isPromoted: true,
    isTested: true,
    description:
      "One Science Premium Whey Protein is formulated with high-quality whey protein concentrate and isolate.",
    howtoUse:
      "Mix 1 scoop (33g) with 200–250ml of cold water or milk. Shake well and consume post-workout.",
    countryInfo: "Manufactured in India (Imported raw materials from Europe)",
    manufactureInfo: "KAG Industries",
    fssaiNumber: 10017064000352,
    importerInfo: "Bright Commodities Pvt. Ltd.",
    images: [
      "https://example.com/images/osn-premium-whey-front.jpg",
      "https://fitnesstack.com/wp-content/uploads/2024/03/One-Science-ISO-Gold-Whey-5-Lbs-Chocolate-Charge.png",
    ],
    defaultThumbnail:
      "https://fitnesstack.com/wp-content/uploads/2024/03/One-Science-ISO-Gold-Whey-5-Lbs-Chocolate-Charge.png",
    defaultMrp: 4999,
    defaultPrice: 2949,
    variants: [
      {
        _id: "68b838617ff80b82fba4ec3c",
        weight: 2,
        weightType: "lbs",
        flavor: "Chocolate Charge",
        mrp: 4999,
        price: 2949,
        sku: "OSN-PW-2LB-CHOC",
        stock: 1,
        isDefault: true,
        images: [
          "https://fitnesstack.com/wp-content/uploads/2024/03/One-Science-ISO-Gold-Whey-5-Lbs-Chocolate-Charge.png",
        ],
      },
    ],
  };

  return (
    <div className="space-y-6 bg-blue-50">
      {/* Tabs Header */}

      <div className="flex gap-4 border-b ">
        <button
        onClick={()=>setActiveTab("product")}
         className={`px-4 py-2 font-medium ${activeTab === "product"
            ? "border-b-2 border-blue-500 text-blue-600"
            : "text-gray-600"
          }`} >
          product</button>
          
           <button
          onClick={() => setActiveTab("images")}
          className={`px-4 py-2 font-medium ${
            activeTab === "images"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Images & Details
        </button>

      </div>
      <div className="space-y-4">
        <ProductCard product={product} />
        <VariantsTable variants={product.variants}/>
      </div>

      <h1>ddd</h1>


    </div>
  );
};

export default ProductDetailPage;
