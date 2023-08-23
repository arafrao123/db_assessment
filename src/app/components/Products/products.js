"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProductCard = ({
  categoryFilter,
  setCategoryFilter,
  searchTerm,
  setSearchTerm,
  updateCartCount,
}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    // Apply category filter
    const filteredByCategory = products.filter(
      (product) => !categoryFilter || product.category === categoryFilter
    );

    // Apply search filter
    const filteredBySearch = filteredByCategory.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredBySearch);
  }, [categoryFilter, searchTerm, products]);

  const handleAddToCart = (productId) => {
    // Call the prop function to update the cart count
    updateCartCount();
    console.log(`Added product with ID ${productId} to the cart`);
  };

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4   ">
      {filteredProducts.map((product) => (
        <div
          className="bg-white border flex flex-col justify-between rounded-xl "
          key={product.id}
        >
          <div className="bg-[#F5F5F5] relative group">
            <div className="rounded-md w-fit h-fit mix-blend-normal py-5 px-8 transition-opacity relative">
              <div className="w-48 h-48 mb-4 relative mix-blend-multiply">
                <Image
                  className="mix-blend-normal"
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <button
                className=" absolute inset-0 cursor-pointer flex justify-center items-center backdrop-blur-xl bg-[#FFC915] text-black p-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                onClick={() => handleAddToCart(product.id)}
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="py-3 border border-t-2 w-full h-full px-5 ">
            <h3 className="text-sm font-light">{product.title}</h3>
            <p className="text-base font-bold mt-2">${product.price}</p>
            <div className="grid justify-start">
              <div className="flex mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-500 ${
                      index < product.rating.rate ? "fill-current" : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
