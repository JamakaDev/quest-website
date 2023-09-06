import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'

const LandingPage = () => {
  
  useEffect(() => {
    
  }, [])
  
  return (
    <div className="mask" style={{backgroundColor: 'rgba(5, 5, 5, 0.55)', paddingRight: '65px', paddingTop: '65px'}}>
      <h1 className="m-1 mt-5 landing-hdr" >Quest Business Solutions</h1>
      <h4 className="mt-3 landing-hdr" >On a quest to be 🫵 best</h4>
      <Carousel />
    </div>    
  )
}

export default LandingPage