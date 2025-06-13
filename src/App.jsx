import { useState } from 'react'
import './App.css'
import { Header,Footer } from './components/indexComponents'
import { AllRoutes } from './routes/AllRoutes'

function App() {


  return (
    <>
     <Header/>
     <AllRoutes/>
     <Footer/>
    </>
  )
}

export default App
