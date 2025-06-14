import React, { useState } from 'react'
import { Link, NavLink, useSearchParams } from 'react-router-dom'


export const Header = ({cartData}) => {

  
  const active=`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`

  const inactive=`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
  const [dark, setDark] = useState(true)
  const [hidden, setHidden] = useState(true)

  const handleDark=()=>
  {

    if(dark)
    {
      document.documentElement.classList.remove("dark")
    }
    else
    {
      document.documentElement.classList.add("dark")
    }

    setDark((prev)=>!prev)
  }
  return (
    <header>


      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b  dark:border-slate-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-start gap-3  rtl:space-x-reverse">
            <p className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white select-none">
              Ani<span className="text-blue-600 dark:text-blue-400">-Assignments</span></p>
          </Link>



          <div className="flex md:order-2 items-center gap-4">
            

            {/* Dark Mode Toggle - always visible */}
            <div className="flex items-center">
              <button
                onClick={() => handleDark()}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 text-xl"
              >
                {dark ? '☀️' : '🌙'}
              </button>
            </div>

           
            

            <button onClick={(() => setHidden((prev) => !prev))} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md: md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>


             <div>
              <h1 className="text-gray-900 max-sm:hidden dark:text-white text-sm font-medium">Card Items: {cartData.length}</h1>
              {/* I have created a custom tailwind css class called as "customSm" u can find it inside the tailwind.config.js file i have given it a width of 430px. if u want u can use it.*/}
            </div>


          </div>



          <div className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              

            </div>

            <div className=' border p-2 mt-3 sm:hidden dark:border-slate-600 border-gray-400'>
              <h1 className="text-gray-900  text-center ml-1  dark:text-white text-sm font-medium">Cart Items {cartData.length}</h1>
            </div>




            <ul className="flex flex-col gap-4 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink  to="/" className={({ isActive })=> isActive?active:inactive} aria-current="page">Home</NavLink>
              </li>
              
              <li>
                <NavLink to="/cart" className={({ isActive })=> isActive?active:inactive} >Cart</NavLink>
              </li>
            </ul>
          </div>



        </div>


      </nav>

    </header>
  )
}
