import React, {useState, useEffect, useContext, Fragment} from 'react'
import { json, useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import ProductCard from '../components/ProductCard'
import Card from '../components/Card'
import { Skeleton } from '@mui/material'


import '../App.css'

const OrderPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {user, authTokens, logoutUser, cart, addItemToCart, removeItemFromCart} = useContext(AuthContext)

  const navigate = useNavigate()


  
  const getProducts = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/products/', {
      method:'GET',
      mode:'cors',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      }
    })
    const data = await response.json()
    await new Promise((resolve) => setTimeout(resolve, 3000))
    
    if(response.status === 200){
      setProducts(data)
      setLoading(false)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
    } else {
      navigate('/loading')
    }
  }
  
  useEffect(() => {
    if (!user) {
      navigate('/signin')
    }
    if (!products.length) {
      getProducts()
    }
  }, [])
  
  const productCards = products.map((product, idx) => 
      <Card 
        key={idx}
        product={product}
      
      />
  )

  const skeletonCards =  new Array(4).fill(0).map((card, idx) => 
      <Skeleton 
        key={idx} 
        className='mb-3' 
        variant='rectangular' 
        sx={{bgcolor: '#263238'}} 
        height='145px' 
      />
    )
  return (
    <div className='my-container container' style={{ height: '75vh', }}>

      {loading ? 
        <div className="products-container1" >
          {skeletonCards}
        </div>
        : 
        <div className="products-container2">
          {productCards}
        </div>}

    </div>
  )
}

export default OrderPage