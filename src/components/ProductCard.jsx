import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ data, loading, cartData, setCartData }) => {
  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={data.image}
        alt={data.name}
      />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {data.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-md font-semibold text-gray-900 dark:text-white">
            ₹{data.price}
          </span>
          <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
