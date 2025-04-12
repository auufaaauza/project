import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // CSS dasar Swiper
import 'swiper/css/navigation'; // Untuk tombol navigasi
import 'swiper/css/pagination'; // Untuk pagination
import { Navigation, Pagination } from 'swiper/modules'; // Modul tambahan

// Definisikan interface untuk produk
interface Product {
  name: string;
  bpom: string;
  description: string;
  images: string[];
}

// Definisikan tipe untuk props
interface ProductReviewProps {
  product: Product;
}

const ProductReview: React.FC<ProductReviewProps> = ({ product }) => {
  return (
    <div className="space-y-4">
      <Swiper
        modules={[Navigation, Pagination]} // Aktifkan modul navigasi dan pagination
        spaceBetween={10} // Jarak antara slide
        slidesPerView={1} // Satu slide per view (portrait mode)
        navigation // Tombol navigasi (opsional)
        pagination={{ clickable: true }} // Pagination yang bisa diklik (opsional)
        className="rounded-2xl shadow-md" // Styling kontainer Swiper
      >
        {/* Slide Pertama: Video */}
        <SwiperSlide>
          <div className="relative">
            <video
              controls
              className="w-full h-[1000px] object-cover rounded-2xl shadow-md"
            >
              <source
                src="videducate.mp4" // Ganti dengan URL video Anda
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>

        {/* Slide Lainnya: Gambar */}
        {product.images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                className="w-full h-[1000px] object-cover rounded-2xl shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductReview;