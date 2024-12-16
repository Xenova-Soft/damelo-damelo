"use client";
// components/NavBarWithSidebar.js
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NavBarWithSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0, transition: { duration: 0.3 } },
    closed: { x: "-100%", transition: { duration: 0.3 } },
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white  ">
        <Link href={"/"} className="text-2xl font-bold">
          {/* <a href="#">Damelo Damelo</a> */}
          <Image
            height={40}
            width={80}
            className=" object-cover ml-5"
            src={"/damelo-logo.png"}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/propertylisting"
            className="text-gray-700 bg-white border border-gray-300 rounded-full px-3 py-1 flex items-center"
          >
            <span className="mr-2">📍</span>
            <span>Add your listing for free</span>
          </Link>
          <button className="flex items-center text-gray-700">
            <span className="mr-2">👤</span>
            Log in
          </button>
          <div className="relative">
            <button className="flex items-center space-x-1 text-gray-700">
              <img
                src="https://flagcdn.com/gb.svg"
                className="w-5 h-5"
                alt="English"
              />
              <span>English</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-gray-700 p-2 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="px-4 py-2">
          <li className="py-2">
            <a href="#" className="text-gray-700">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-gray-700">
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-gray-700">
              Services
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-gray-700">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Overlay (optional, to close the sidebar when clicking outside) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}
    </div>
  );
};

export default NavBarWithSidebar;
