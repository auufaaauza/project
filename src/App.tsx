import React, { useState } from 'react';
import { Star, Leaf, Shield } from 'lucide-react';
import HeroSection from './HeroSection';
import DropdownMenu from './DropdownMenu';


const product = {
  id: 1,
  name: "Lucyme White & Shine Body Lotion",
  description:
    "Mengandung Niacinamide & Aloe Vera Ekstra, Flawless Skin & Effortlessly",
  bpom: "NA18240113988",
  images: [
    "https://i.pinimg.com/736x/5a/19/3a/5a193a88f2709f8c6afc78e902d5ee8e.jpg",
    "https://images.unsplash.com/photo-1583125673401-c0f9b5e2d0c1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1597826781285-a55f5e0e009e?auto=format&fit=crop&w=800&q=80"
  ],
  benefits: [
    "Melembabkakan",
    "Mencerahkan",
    "Memutihkan Kulit",
    "Meratakan Warna Kulit",
    "Menghilangkan Bekas Luka",
    "Menghilangkan Kerutan Hitam"
  ],
  ingredients: [
    "Niacinamide",
    "Aloe Vera"
  ]
};

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="fixed w-full bg-transparent backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <img
                  src="/Logo.jpg"
                  alt="Logo Lucyme"
                  className="h-14 w-13 text-pink-500 group-hover:animate-pulse"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-pink-500 drop-shadow-lg">
                  Lucyme
                </h1>
                <span className="text-xs uppercase tracking-widest text-pink-300">
                  Body Lotion
                </span>
              </div>
            </div>

            {/* Tombol Pesan Sekarang */}
            <div>
              <DropdownMenu/>
            </div>
          </div>
        </div>
      </header>



      {/* Content with padding for fixed header */}
      < div className="pt-24" >
        {/* Rest of the content remains unchanged */}
        {/* Hero Section */}
        <div>
          <HeroSection />
          {/* Konten lainnya */}
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="h-8 w-8 text-pink-500" />
              <div>
                <h3 className="font-semibold">Natural Ingredients</h3>
                <p className="text-gray-600">Carefully selected botanical extracts</p>
              </div>

            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 text-pink-500" />
              <div>
                <h3 className="font-semibold">Dermatologist Tested</h3>
                <p className="text-gray-600">Clinically proven formulations</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Star className="h-8 w-8 text-pink-500" />
              <div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-gray-600">Highest grade ingredients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Catalog */}
        {/* Single Product Review */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold mb-8 text-gray-900">About Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Product Images */}
            <div className="space-y-4">
              {product.images.map((image, index) => (
                <div key={index} className="relative">
                  {/* Gambar pertama */}
                  {index === 0 && (
                    <img
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-64  object-cover rounded-2xl shadow-md"
                    />
                  )}
                  {/* Video sebagai pengganti gambar kedua */}
                  {index === 1 && (
                    <video
                      controls
                      className="w-full h-64 object-cover rounded-2xl shadow-md"
                    >
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4" // Ganti dengan URL video Anda
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {/* Gambar ketiga */}
                  {index === 2 && (
                    <img
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-2xl shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Right Column: Product Details */}
            <div className="bg-white rounded-2xl shadow-md p-7">
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <div className="flex items-center mb-4">
                <span className="ml-0 text-gray-600">BPOM {product.bpom}</span>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">PT.Kraizer Global Solution</p>
                <p className="text-gray-400">Digitapreneur </p>
              </div>
              {/* <div>
                <h3 className="text-lg font-semibold mb-4">Research</h3>
                <p className="text-gray-400">All our products undergo rigorous clinical testing and are backed by dermatological studies.</p>
              </div> */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Our Contact</h3>
                <p className="text-gray-400">
                  <a href="http://instagram.com/lucyme.beautywhitening" target="_blank" rel="noopener noreferrer">
                    Instagram: @lucyme.beautywhitening
                  </a>
                </p>
                <p className="text-gray-400">
                  <a href="http://wa.me/6285724210417" target="_blank" rel="noopener noreferrer">
                    WhatsApp: 085724210417
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </div >
  );
}

export default App;