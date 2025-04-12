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
    "/Our Products.png",
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
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
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
    </div>
  );
};

export default HeroSection;