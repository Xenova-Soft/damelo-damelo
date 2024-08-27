"use client"
import React, { useState } from 'react';

const PropertySearch = () => {
  const [selectedOption, setSelectedOption] = useState('Rent');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url('/main-image.webp')", // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-gray-50 bg-opacity-80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Find your property in Spain
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <button
              className={`px-4 py-2 rounded-l-lg ${
                selectedOption === 'Buy'
                  ? 'bg-white text-gray-800 font-bold border-2 border-r-0 border-pink-500'
                  : 'bg-gray-100 text-gray-800 font-bold'
              }`}
              onClick={() => handleOptionChange('Buy')}
            >
              Buy
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${
                selectedOption === 'Rent'
                  ? 'bg-pink-500 text-white font-bold'
                  : 'bg-gray-100 text-gray-800 font-bold'
              }`}
              onClick={() => handleOptionChange('Rent')}
            >
              Rent
            </button>

            <select className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option value="Homes">Homes</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
              <option value="Land">Land</option>
            </select>

            <input
              type="text"
              placeholder="Search in Spain"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 flex-grow bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button className="px-6 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
