"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = ({
  categoryFilter,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  cartCount,
  updateCartCount,
}) => {
  const handleAddToCart = () => {
    updateCartCount();
  };

  return (
    <nav className="bg-white grid grid-cols-3 py-5 px-5 gap-5">
      <div className="col-span-1">
        <Image src="/images/logo.png" height={150} width={150} alt="logo" />
      </div>
      <div className="col-span-1 grid-flow-col flex rounded-xl w-fit ">
        <div className="py-3 bg-[#E1E1E1] text-center rounded-s-lg  ">
          <select
            onChange={(e) => onCategoryChange(e.target.value)}
            className="bg-transparent text-center text-gray-600 w-fit  focus:outline-none"
          >
            <option value="" className="text-gray-600 py-1">
              All
            </option>
            <option value="electronics" className="text-gray-600 py-1">
              Electronics
            </option>
            <option value="men's clothing" className="text-gray-600 py-1">
              Mens Clothing
            </option>
            <option value="women's clothing" className="text-gray-600 py-1">
              Womens Clothing
            </option>
            <option value="jewelery" className="text-gray-600 py-1">
              Jewelry
            </option>
          </select>
        </div>
        <div className="py-3 bg-[#E1E1E1] grid grid-flow-col rounded-e-lg focus:border-0 focus:ring-0">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent focus:outline-none"
          />
          <div className="px-4 flex justify-center">
            <Image
              src="/images/search.svg"
              alt="searchicon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1  justify-center items-center pb-1 flex grid-flow-col gap-3">
        <Image src="/images/cart.svg" alt="cart" width={24} height={24} />
        <h1>Cart</h1>
        <div className="bg-[#008ECC] grid py-1 rounded-full w-fit px-2 font-bold text-white text-sm justify-center items-center">
          {cartCount}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
