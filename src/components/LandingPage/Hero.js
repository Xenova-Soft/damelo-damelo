"use client"
import React, { useState } from 'react';

const PropertySearch = () => {
  const [selectedOption, setSelectedOption] = useState('Rent');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <main className="container mx-auto relative">
      <img
        className="w-full h-[500px] object-cover"
        src="https://img4.idealista.com/blur/HOME_ORIGINAL/0/id.pro.es.image.master/home/1721806593337.jpg"
        alt="Home in Marbella, Málaga"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-[#e1f56e] bg-opacity-90 px-8 py-6 rounded-md">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Find your property in Spain</h2>
        <div className="flex items-center space-x-4">
          <button className="rounded-md bg-pink-500 px-6 py-2 font-bold text-white hover:bg-pink-600">
            Buy
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-6 py-2 font-bold text-gray-800 hover:bg-gray-100">
            Rent
          </button>
          <select className="rounded-md border border-gray-300 bg-white px-4 py-2">
            <option value="homes">Homes</option>
            <option value="apartments">Apartments</option>
            <option value="villas">Villas</option>
          </select>
          <div className="relative">
            <input
              type="text"
              placeholder="Search in Spain"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 focus:outline-none w-80"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button
            className="rounded-md bg-[#b62682] px-6 py-2 font-bold text-white hover:bg-[#8c1d64]"
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default PropertySearch;
