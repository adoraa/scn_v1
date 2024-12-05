import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchProductByIdQuery } from '../../redux/features/products/productsApi';
import { getImgUrl } from '../../utils/getImgUrl';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/features/cart/cartSlice';

const SingleProduct = () => {
    const {id} = useParams();
    const {data: product, isLoading, isError} = useFetchProductByIdQuery(id);
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
      dispatch(addToCart(product))
    }

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error loading product</div>

  return (
    <div className="px-20 rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/products/${product?._id}`}>
            <img
              src={`${getImgUrl(product.productImage)}`}
              alt={product.name}
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/products/${product?._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600">
            {product.description}
          </p>
          <p className="text-gray-600 mb-5">
            Qty: {product.size}
          </p>
          <p className="font-medium mb-5">
            ${product?.newPrice}
            <span className="line-through font-normal ml-2">
              ${product?.oldPrice}
            </span>
          </p>
          <button onClick={() => handleAddToCart(product)} className="btn-primary px-6 space-x-1 flex items-center gap-1">
            <FiShoppingCart className="" />
            <span className="text-nowrap">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct