import React, { useState, useEffect, useRef } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Tombol Utama */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-pink-500 px-4 py-2 rounded-full border border-pink-500 transition-all duration-300 inline-block hover:bg-transparent focus:outline-none"
      >
        Pesan Sekarang
      </button>

      {/* Dropdown Menu dengan Ukuran Lebih Besar */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-80 bg-white/50 backdrop-blur-lg rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
          style={{ zIndex: 10 }}
        >
          <div className="py-4"> {/* Padding vertikal diperbesar */}
            <a
              href="#"
              className="block px-6 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200" // Padding dan font size diperbesar
            >
              TikTok Shop
            </a>
            <a
              href="#"
              className="block px-6 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
            >
              Shopee
            </a>
            <a
              href="#"
              className="block px-6 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
            >
              WhatsApp Admin
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;