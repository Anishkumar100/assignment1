import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home,Cart } from '../pages/indexPages'

export const AllRoutes = ( {data,loading,cartData,setCartData} ) => {
  return (
    <div className=" bg-slate-200 dark:bg-gray-900">
    <Routes>
        <Route path="/" element={<Home data={data} loading={loading} cartData={cartData} setCartData={setCartData} />}/>
        
        <Route path="/cart" element={<Cart data={data} loading={loading} cartData={cartData} setCartData={setCartData}/>}/>
    </Routes>
    </div>
    
  )
}
