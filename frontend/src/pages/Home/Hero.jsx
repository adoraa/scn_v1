import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src="" alt="hero image" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Arrivals
        </h1>
        <p className="mb-10">
          It’s time for you to update your fragrance wardrobe with our newest
          arrivals, meticulously crafted to captivate and enchant with notes of
          sandalwood, bergamot, and leather. At SCN Royal, we pride ourselves on
          offering only the finest scents, perfect for any occasion. Discover
          your new signature scent today!
        </p>
        <button className="btn-primary px-6 space-x-1 flex items-center gap-1">
          <FiShoppingCart />
          <span className="text-nowrap">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
