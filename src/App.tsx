import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Leaf, Shield, Search } from 'lucide-react';
import HeroSection from './HeroSection';


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
    "Meratakan Warna Kulit"
  ],
  ingredients: [
    "Niacinamide",
    "Aloe Vera"
  ]
};

function App() {
  const [isMenuOpen] = useState(false);
  const [isSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="fixed w-full bg-gradient-to-r from-pink-400/90 via-pink-500/90 to-pink-400/90 backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <img
                src ="/Logo.jpg"
                alt="Logo Lucyme"
                className="h-14 w-13 text-pink-500 group-hover:animate-pulse" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                  Lucyme
                </h1>
                <span className="text-xs uppercase tracking-widest text-white/70">Body Lotion</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {/* {['Research', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/90 hover:text-white text-sm uppercase tracking-wider font-medium hover:drop-shadow-lg relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))} */}
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-6">
              {/* <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="bg-white/20 p-3 rounded-xl hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
              >
                <Search className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <button className="bg-white/20 p-3 rounded-xl hover:bg-white/30 hover:scale-110 transition-all duration-300 group relative">
                <Heart className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 bg-white text-pink-500 text-xs font-bold rounded-lg w-5 h-5 flex items-center justify-center shadow-md transform -rotate-12">
                  0
                </span>
              </button>
              <button className="bg-white/20 p-3 rounded-xl hover:bg-white/30 hover:scale-110 transition-all duration-300 group relative">
                <ShoppingCart className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 bg-white text-pink-500 text-xs font-bold rounded-lg w-5 h-5 flex items-center justify-center shadow-md transform rotate-12">
                  0
                </span>
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              {/* <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                {isMenuOpen ?
                  <X className="h-6 w-6 text-white" /> :
                  <Menu className="h-6 w-6 text-white" />
                }
              </button> */}
            </div>
          </div>

          {/* Search bar */}
          {isSearchOpen && (
            <div className="py-6 border-t border-white/10">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 border-2 border-white/30 focus:outline-none focus:border-white/50 text-white placeholder-white/70 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-gradient-to-r from-pink-400/95 via-pink-500/95 to-pink-400/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Research', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-3 rounded-xl text-base font-medium text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="px-5 py-4 border-t border-white/10 flex justify-around">
              <button className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 relative group">
                <Heart className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 bg-white text-pink-500 text-xs font-bold rounded-lg w-5 h-5 flex items-center justify-center shadow-md transform -rotate-12">
                  0
                </span>
              </button>
              <button className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 relative group">
                <ShoppingCart className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 bg-white text-pink-500 text-xs font-bold rounded-lg w-5 h-5 flex items-center justify-center shadow-md transform rotate-12">
                  0
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Content with padding for fixed header */}
      <div className="pt-24">
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
                      className="w-full h-64 object-cover rounded-2xl shadow-md"
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
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <div className="flex items-center mb-4">
                <span className="ml-1 text-gray-600">BPOM {product.bpom}</span>
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
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://wa.me/6285724210417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors inline-block"
                >
                  Pesan Sekarang
                </a>
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
      </div>
    </div >
  );
}

export default App;