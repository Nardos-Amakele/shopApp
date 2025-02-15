//search and filter functionality
import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
    onFilter(category);
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between my-6">
        <div>
          <h1 className="text-3xl">
            Product <strong className="text-[#864cf8]">Store</strong><sup>™</sup>
          </h1>
          <p>best seller of the year</p>
        </div>

        {/* Search box (with title) */}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border-[#f5e2f8] p-3 rounded-lg w-full max-w-xl bg-[#854cf821]"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* filter for large screens */}

      <div className="my-4">
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => handleFilterChange('')}
            className={`p-4 rounded-lg transition border-b-2 ${selectedFilter === '' ? 'border-[#864cf8]' : 'border-transparent'
              } hover:border-[#864cf8] inline-block w-auto`}
          >
            All-Categories
          </button>
          <button
            onClick={() => handleFilterChange("men's clothing")}
            className={`p-2 rounded-lg transition border-b-2 ${selectedFilter === "men's clothing" ? 'border-[#864cf8]' : 'border-transparent'
              } hover:border-[#864cf8] inline-block w-auto`}
          >
            Men's-Clothing
          </button>
          <button
            onClick={() => handleFilterChange("women's clothing")}
            className={`p-2 rounded-lg transition border-b-2 ${selectedFilter === "women's clothing" ? 'border-[#864cf8]' : 'border-transparent'
              } hover:border-[#864cf8] inline-block w-auto`}
          >
            Women's-Clothing
          </button>
          <button
            onClick={() => handleFilterChange('electronics')}
            className={`p-2 rounded-lg transition border-b-2 ${selectedFilter === 'electronics' ? 'border-[#864cf8]' : 'border-transparent'
              } hover:border-[#864cf8] inline-block w-auto`}
          >
            Electronics
          </button>
          <button
            onClick={() => handleFilterChange('jewelery')}
            className={`p-2 rounded-lg transition border-b-2 ${selectedFilter === 'jewelery' ? 'border-[#864cf8]' : 'border-transparent'
              } hover:border-[#864cf8] inline-block w-auto`}
          >
            Jewelry
          </button>
        </div>
        {/* filter for small screens*/}

        <div className="md:hidden">
          <select
            onChange={(e) => handleFilterChange(e.target.value)}
            className="p-2 rounded-lg border-[#f5e2f8] bg-[#854cf821] w-auto"
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
