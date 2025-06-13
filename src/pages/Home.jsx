import React from 'react'
import { ProductCard } from '../components/indexComponents'

export const Home = ( {data,loading,cartData,setCartData} ) => {
  return (
    <main>
      <section className='flex flex-wrap justify-center '>
        {data ? data.map((dat)=>
        {
          return (<ProductCard key={dat.id} data={data} dat={dat} loading={loading} cartData={cartData} setCartData={setCartData}/>)
        })
        : <h1>No Product Information</h1>}
      </section>
    </main>
  )
}
