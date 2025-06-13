import React from 'react'

export const Home = ( {data,loading,cartData,setCartData} ) => {
  return (
    <main>
      <section>
        {data ? <>
        
        </>: <h1>No Product Information</h1>}
      </section>
    </main>
  )
}
