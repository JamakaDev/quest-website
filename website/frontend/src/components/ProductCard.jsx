import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext'

import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import '../App.css'



const ProductCard = ({product}) => {
  const {cart, itemsInCart, addItemToCart, removeItemFromCart} = useContext(AuthContext)
  
  const addItem = async (e, product) => {
    e.preventDefault()
    await addItemToCart(product)
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('dup-cart', JSON.stringify(itemsInCart));
    
  }
  
  const removeItem = async (e, product) => {
    e.preventDefault()
    await removeItemFromCart(product)
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('dup-cart', JSON.stringify(itemsInCart));

  }

  return (
    <div className="row justify-content-center mb-2 " >
      <div className="col-md-12 col-xl-10 my-card" >
        <div className="card shadow-0 border rounded-3 " style={{background: 'linear-gradient(to right, #fff, #fff, #eee, #ddd',opacity:'90%'}}>
          <div className="card-body " style={{padding:'0'}}>
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface" >
                  <img src={product.image_path}
                    className="w-100" width='160' height='160'/>

                    <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>

                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h4>{product.name}</h4>
                <img src="" alt="" />
                <div className="mt-1 mb-0 text-muted small">
                  <span>Cards</span>
                  <span className="text-primary"> • </span>
                  <span>Remotes</span>
                  <span className="text-primary"> • </span>
                  <span>Decals</span>
                </div>
                <div className="mb-2 text-muted small">                      
                  <span>Best Service</span>
                  <span className="text-primary"> • </span>
                  <span>Quality Guarantee</span>
                </div>

                <p className="text-truncate mb-4 mb-md-0">
                {product.description}
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">${(product.retail_price).toFixed(2)}</h4>
                  <span className="text-danger"><s>${(product.retail_price+(Math.floor(Math.random() * 25) + 1)/100).toFixed(2)}</s></span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-outline-primary btn-sm btn-out-hvr" type="button" onClick={(e) => removeItem(e, product)}>Details</button>
                  <button className="btn btn-outline-primary btn-sm mt-2 btn-out-hvr" type="button" onClick={(e) => addItem(e, product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// return (
//   <MDBCard style={{margin:'1%', background: 'linear-gradient(#ffffff, #ffffff, #abcdef)'}} shadow='1' border='primary'  className='mb-3 productCard'>
//     <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//       <MDBCardImage src={product.image_path} fluid alt='...' width='200px' height='200px' />
//         <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></div>
//     </MDBRipple>
//     <MDBCardBody>
//       <MDBCardText><h3>{product.brand}</h3></MDBCardText>
//       <MDBCardTitle>{product.name}</MDBCardTitle>
//       <MDBBtn color='success' style={{marginBottom:'.5rem', marginRight:'.5rem'}} onClick={() => console.log('Added to cart')}>Add to Cart</MDBBtn>
//       <MDBBtn href='#' style={{marginBottom:'.5rem'}}>More Details</MDBBtn>
//       <br />
//       <Link to={product.manual_path} target='_blank' download >Download Manual</Link>
//     </MDBCardBody>
//   </MDBCard>
// );


export default ProductCard
