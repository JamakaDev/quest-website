import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext'
import {MDBIcon, MDBNavbarLink} from 'mdb-react-ui-kit'
import AlertDialogSlide from '../components/Modal'

const Card = ({product}) => {
  const {cart, addItemToCart} = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  
  const addItem = async (e, product) => {
    e.preventDefault()
    await addItemToCart(product)
    localStorage.setItem('cart', JSON.stringify(cart));
    
  }

  return (
    <div className="card m-3" style={{backgroundImage: 'linear-gradient(#fff, #fff,#abcdef)', boxShadow: 'rgba(250, 250, 250, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
      <div className="h-100" style={{width: "16vw"}}>
        <div className="bg-image hover-zoom ripple rounded ripple-surface" >
          <img src={product.image_path} className="w-100" width='160' height='160'/>
          <div className="hover-overlay">
            <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
          </div>
        </div>
        
        <div className="card-body">
          <img className='mb-2' src={product.logo_path} alt="" width='160' height='36'style={{}}/>
          <h5 className="card-title">{product.name}</h5>
          <hr/>
          <div className='d-flex  justify-content-between align-items-center mb-3'>
            <h4 className="mb-1 me-1">Price:</h4>
            <h5 className="mb-1 me-1">${(product.retail_price).toFixed(2)}</h5>
          </div>
          
            
          <AlertDialogSlide product={product}/>
          <MDBNavbarLink 
            className='d-flex justify-content-evenly align-items-center scale-ctrl btn mt-3 add-btn' 
            style={{width: '100%', height:'36px', borderRadius: '2rem', border:'2px solid #00B592'}}
            onClick={((e) => addItem(e, product))}
          >
            Add To Cart 
            <MDBIcon className='cart-icon' fas icon="shopping-cart" size='lg' />
          </MDBNavbarLink>
        </div>
      </div>
    </div>
  )
}

export default Card