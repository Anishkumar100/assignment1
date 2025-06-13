import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ data,dat, loading, cartData, setCartData }) => {
  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  const AddToCart=((id)=>
  {
    const selectedProduct=data.find((dat)=>
    {
      return dat.id === id
    })

   // Check if product is already in cart
    let isAlreadyInCart = false;
    for (let item of cartData) {
      if (item.id === selectedProduct.id) {
        isAlreadyInCart = true;
        break;
      }
    }

    // If not in cart, add it
    if (!isAlreadyInCart) {
      const newCart = [...cartData, selectedProduct];
      setCartData(newCart);
      localStorage.setItem('cartData', JSON.stringify(newCart));
      
    }
   

  })
  console.log(cartData)

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4 overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={dat.image}
        alt={dat.name}
      />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {dat.name}
        </h5>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {dat.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-md font-semibold text-gray-900 dark:text-white">
            ₹{dat.price}
          </span>
          <button onClick={()=>AddToCart(dat.id)} className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
