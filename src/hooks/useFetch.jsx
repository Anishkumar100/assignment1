import React from 'react'
import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchOperation = useCallback(async () => {
    setLoading(true)

    try {
      const res = await fetch(url)
      if(res.ok) 
      {
        const resJson = res.json()
        setLoading(false)
        setData(resJson)
      }
      else
      {
        throw new Error(`API is broken`)
      }

    }
    catch (error) 
    {
      console.log(error.message)
    }
  })

  useEffect(()=>
  {
    fetchOperation()
  },[])

  return {data,loading,fetchOperation}
}
