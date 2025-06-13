import { useState } from 'react'
import './App.css'
import { Header,Footer } from './components/indexComponents'
import { AllRoutes } from './routes/AllRoutes'
import { useFetch } from './hooks/useFetch'

function App() {

  const url=`http://localhost:8000/products`
  const {data,loading} =useFetch(url)
  const [cartData,setCartData] = useState(JSON.parse(localStorage.getItem("cardData"))||[])
  console.log(data)

  return (
    <>
     <Header cartData={cartData}/>
     <AllRoutes data={data} loading={loading} cartData={cartData} setCartData={setCartData}/>
     <Footer/>
    </>
  )
}

export default App
