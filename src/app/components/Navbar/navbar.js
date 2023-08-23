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
    <nav className="bg-white sm:grid-cols-3 py-5 px-5 gap-5 w-full grid grid-cols-1">
      <div className="col-span-1">
        <Image src="images/logo.png" height={150} width={150} alt="logo" />
      </div>
      <div className="">
        <div className="col-span-1 grid-flow-col flex rounded-xl sm:w-full w-[14rem] mr-5">
          <div className="py-3 bg-[#E1E1E1] text-center rounded-s-lg  ">
            <select
              onChange={(e) => onCategoryChange(e.target.value)}
              className="bg-transparent text-center text-gray-600 sm:w-fit w-12  focus:outline-none "
            >
              <option value="" className="text-gray-600 py-1">
                All
              </option>
              <option
                value="electronics"
                className="text-gray-600 py-1 sm:text-lg text-xs"
              >
                Electronics
              </option>
              <option
                value="men's clothing"
                className="text-gray-600 py-1 sm:text-lg text-xs"
              >
                Mens Clothing
              </option>
              <option
                value="women's clothing"
                className="text-gray-600 py-1 sm:text-lg text-xs "
              >
                Womens Clothing
              </option>
              <option
                value="jewelery"
                className="text-gray-600 py-1 sm:text-lg text-xs"
              >
                Jewelry
              </option>
            </select>
          </div>
          <div className="py-3 bg-[#E1E1E1] grid grid-flow-col rounded-e-lg focus:border-0 focus:ring-0 sm:w-fit">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-transparent focus:outline-none"
            />
            <div className="px-4 flex justify-center">
              <Image
                src="images/search.svg"
                alt="searchicon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1  md:justify-center md:items-center items-end justify-end pb-1 flex grid-flow-col gap-3 py-4 sm:py-0">
        <Image src="images/cart.svg" alt="cart" width={24} height={24} />
        <h1>Cart</h1>
        <div className="bg-[#008ECC] grid py-1 rounded-full w-fit px-2 font-bold text-white text-sm justify-center items-center">
          {cartCount}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
