"use client";
import ProductCard from "./components/Products/products";
import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <html lang="en">
      <body className="bg-[#E1E1E1]">
        <Navbar
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          cartCount={cartCount}
        />

        <h1 className="text-2xl font-semibold text-[#008ECC] p-5">Results</h1>
        <ProductCard
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          updateCartCount={updateCartCount}
        />
      </body>
    </html>
  );
}
