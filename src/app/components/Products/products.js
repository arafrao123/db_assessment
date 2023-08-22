"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  ">
      {products.map((product) => (
        <div
          className="bg-white border rounded-md  flex flex-col justify-between "
          key={product.id}
        >
          <div className="bg-[#F5F5F5] flex justify-center items-center  ">
            <div className=" p-3 rounded-md w-fit h-fit mix-blend-normal ">
              <Image
                src={product.image}
                alt={product.title}
                className="product-image"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="py-3 border border-t-2 w-full h-full">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-base mt-2">Price: ${product.price}</p>
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
      ))}
    </div>
  );
};

export default ProductCard;
