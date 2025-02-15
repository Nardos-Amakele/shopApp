"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../api/fetchProducts";
import ProductCard from "./ProductCard";
import SearchFilter from "./SearchFilter";
import Pagination from "./Pagination";

const PRODUCTS_PER_PAGE = 6; // Number of products displayed per page

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // search functionality
  const handleSearch = (query: string) => {
    setFilteredProducts(
      products.filter((p: any) =>
        p.title.toLowerCase().includes(query.toLowerCase()) // Filters products by title
      )
    );
    setCurrentPage(1); // Reset to the first page after search
  };

  //filtering
  const handleFilter = (category: string) => {
    setFilteredProducts(
      category ? products.filter((p: any) => p.category === category) : products
    );
    setCurrentPage(1); // Reset to the first page after filtering
  };

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="pt-10">
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />

      <h2 className="text-2xl mb-14">Make your choice</h2>

      {/* Display products in a grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      {/* Pagination component to navigate between pages */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
