import React, { useEffect, useState } from "react";
import { ItemCard } from "../Products/ItemCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = ["All", "Unisex", "Masculine", "Feminine"];

export const TopSellers = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory.toLowerCase()
        );

  console.log(filteredProducts);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
        {filteredProducts.length > 0 &&
          filteredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <ItemCard product={product} />
              {/* <h2></h2> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
