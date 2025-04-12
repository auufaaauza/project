import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import default styles
import "swiper/css/pagination"; // Optional: if you want pagination
import "swiper/css/navigation"; // Optional: if you want navigation arrows
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HeroSection = () => {
  const images = [
    "/Home.jpg",
    "/About Us.png",
    "Our Products.png",
  ];

  return (
    <div className="relative">
      {/* Slideshow */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Teks */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Achieve Healthy & Glow Skin
          </h2>
          <p className="text-xl text-white opacity-90 drop-shadow-md">
            Experience the perfect blend of science and luxury for your skin
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;