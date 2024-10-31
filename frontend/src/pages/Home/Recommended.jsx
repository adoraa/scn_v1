import React, { useEffect, useState } from "react";
// import { ItemCard } from "../products/ItemCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Recommended = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recommended</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.length > 0 &&
          products.slice(3, 8).map((product, index) => (
            <SwiperSlide key={index}>
              {/* <ItemCard product={product} /> */}
              <h2></h2>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
