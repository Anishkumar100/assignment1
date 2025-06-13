import React from 'react'
import { CartPageCard } from '../components/indexComponents'

export const Cart = ({ data, loading, cartData, setCartData }) => {
  return (
    <main>
      <section>

        {cartData.length>0 ? cartData.map((item) => {
          return(
            <CartPageCard key={item.id} data={data} dat={item} loading={loading} cartData={cartData} setCartData={setCartData}/>
          )
        }) : <p className=' text-center dark:text-white'>No Items In The Cart</p>}

      </section>
    </main>
  )
}
