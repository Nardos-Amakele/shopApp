"use client"; 
import React, { useRef } from 'react';
import ProductList from "./components/ProductList";
import Welcome from "./components/welcome";

export default function Home() {
  const productListRef = useRef<HTMLDivElement | null>(null);

  const scrollToProductList = () => {
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="container mx-auto">
      <Welcome scrollToNext={scrollToProductList} />
      <div ref={productListRef}>
        <ProductList />
      </div>
    </main>
  );
}