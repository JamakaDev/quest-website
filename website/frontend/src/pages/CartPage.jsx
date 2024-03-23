import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import CartItemCard from '../components/CartItemCard'

const CartPage = () => {
  const {cart, user} = useContext(AuthContext)
  const [cartItemsToDisplay,  setCartItemsToDisplay] = useState([]) 
  const itemNamesRef = []
  const itemDupesRef = {}
  const navigate = useNavigate()
  
  let subtotal = cart.map((item) => {return item.retail_price})
  subtotal = subtotal.length ? subtotal.reduce((prev, item) => prev + item) : 0
  let taxes = 1.07 // 7% sales tax
  let shipping = subtotal > 100.00 ? 0.00 : 25.00 // shipping fee
  
  
  useEffect(()=>{
    if (!user) {
      navigate('/signin')
    }

    for (let item of cart) {
      if (!itemNamesRef.includes(item.name)){
        itemNamesRef.push(item.name)
        itemDupesRef[item.name] = true
      } 
    }
    for (let item of cart) {
      if (itemNamesRef.includes(item.name) && itemDupesRef[item.name] ){
        setCartItemsToDisplay(prevItems => [...prevItems, item])
        itemDupesRef[item.name] = false

      }
    }
  },[])
  

  return (

      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col">
            <div className="card " style={{backgroundImage: 'linear-gradient(to left bottom, #9FA6B2, #abcdef,#9FA6B2)', opacity:'95%'}}>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3 scale-ctrl"><a href="/order" className="text-dark"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <h5 className="mb-1 text-dark">Shopping cart</h5>
                        {!cart.length ? <p className='text-danger mb-0'>You have {cart.length} {'item(s)'} in your cart</p> : <p className="mb-0">You have {cart.length} {'item(s)'} in your cart</p>}
                      </div>
                      <div>
                        <span className="text-dark"><strong>Sort by:</strong></span>
                        <select className="my-select"  name='sortby' style={{background:'#adb5bd', borderRadius:'5px'}}>
                          <option className='my-option2' value='a-z'  >A to Z</option>
                          <option disabled className='small text-dark'>Alphabetical +/-</option>
                          <option className='my-option2' value='z-a'   >Z to A</option>
                          <option disabled className='small text-dark'>Alphabetical -/+</option>
                          <option className='my-option2' value='high-price' >Price +/-</option>
                          <option disabled className='small text-dark'>Increasing Price</option>
                          <option className='my-option2' value='low-price' >Price -/+</option>
                          <option disabled className='small text-dark'>Decreasing Price</option>
                          <option className='my-option2' value='high-qty' >Qty +/-</option>
                          <option disabled className='small text-dark'>Increasing Qty</option>
                          <option className='my-option2' value='low-qty' >Qty -/+</option>
                          <option disabled className='small text-dark'>Decreasing Qty</option> 
                        </select>
                      </div>
                    </div>
                    <div className='cart-items'>
                      {cartItemsToDisplay.map((item, idx) => <CartItemCard key={idx} item={item} array={cart}/>)}
                    </div>
                  </div>
                  <div className="col-lg-5 mt-5 ">

                    <div className="card bg-dark text-white rounded-3" style={{height:'500px'}}>
                      <div className="card-body">
                        
                        <div className="d-flex justify-content-center align-items-center mb-4">
                          <h5 className="mb-0 text-info">Order Summary</h5>
                        </div>
                        

                        <hr className="my-4"/>
                        <p className="medium mb-2 text-danger">Accepted Payments</p>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-visa fa-2x me-1"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-mastercard fa-2x me-1"></i></a>
                        <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-amex fa-2x me-1"></i></a>
                        <a href="#!" type="submit" className="text-white"><i 
                          className="fab fa-cc-discover fa-2x me-1"></i></a>
                        <a href="#!" type="submit" className="text-white"><i 
                          className="fab fa-cc-paypal fa-2x"></i></a>

                        
                        <hr className="my-4"/>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal:</p>
                          <p className="mb-2">{`$${subtotal.toFixed(2)}`}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          {subtotal > 100 ? <s className="mb-2 text-success">{`$${shipping.toFixed(2)}`}</s> : <p className="mb-2 text-danger">{`$${shipping.toFixed(2)}`}</p>}
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">{`$${(subtotal*taxes+shipping).toFixed(2)}`}</p>
                        </div>

                        <button type="button" className="btn btn-info btn-block btn-md scale-ctrl" onClick={()=>{console.log(cartItemsToDisplay)}}>
                          <div className="d-flex justify-content-between">
                            <span>{`$${(subtotal*taxes+shipping).toFixed(2)}`}</span>
                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>

                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default CartPage

