import React from 'react'

export const CartPageCard = ({data,dat, loading, cartData, setCartData }) => {
  return (
        <div
            key={dat.id}
            className="flex dats-center items-center justify-between w-full sm-custom:w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4  shadow-sm"
          >
            <img
              className="w-16 h-16 object-cover rounded"
              src={dat.image}
              alt={dat.name}
            />
            <h5 className="text-lg font-medium text-gray-900 dark:text-white flex-1 mx-4">
              {dat.name}
            </h5>
            <span className="text-md font-semibold text-gray-900 dark:text-white">
              ${dat.price}
            </span>
            <button
              onClick={() => {
                const newCart = cartData.filter((cartItem) => cartItem.id !== dat.id);
                setCartData(newCart);
                localStorage.setItem('cartData', JSON.stringify(newCart));
                
              }}
              className="ml-4 px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Remove
            </button>
          </div>
  )
}
