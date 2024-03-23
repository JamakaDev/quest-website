import React, {useContext} from 'react'
import {MDBIcon} from 'mdb-react-ui-kit'
import {AuthContext} from '../context/AuthContext'

const CartItemCard = ({key, item, array}) => {
  
  const {cart, itemsInCart, addItemToCart, deleteAllFromCart, removeItemFromCart, trashItemsFromCart} = useContext(AuthContext)
  let qty = cart.filter((itm) => itm.name === item.name)
  let quantity = qty.length
  let total = item.retail_price * quantity
  

  const addItem = async (e, item) => {
    e.preventDefault()
    await addItemToCart(item)
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('dup-cart', JSON.stringify(itemsInCart));
  }
  
  const removeItem = async (e, item) => {
    e.preventDefault()
    await removeItemFromCart(item)
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('dup-cart', JSON.stringify(itemsInCart));
  }
  
  const trashItems = async (e, item) => {
    e.preventDefault();    
    await trashItemsFromCart(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('dup-cart', JSON.stringify(itemsInCart));
  }
  
  const deleteAllItems = async (e) => {
    e.preventDefault()
    await deleteAllFromCart()
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('dup-cart', JSON.stringify(itemsInCart));
  }
  
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <div className="card mb-2 " style={{width:'675px', maxHeight: '235px'}}>
        <div className="card-body ">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center ">
              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={item.image_path}
                    className="w-100 " />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>
                  </a>
                </div>
              <div className="ms-3" style={{paddingRight:'5px'}}>
                <h5>{item.name}</h5>
                <img className='mt-3' src={item.logo_path} alt="" width='140' height='30'/>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              
              <a href="#!" style={{color: "#cecece"}} onClick={(e) => {removeItem(e, item)}}><MDBIcon className='minus-circle scale-ctrl' fas icon="minus-circle" /></a>
              
              <div style={{width: "50px"}}>
                <h5 className="fw-normal mb-0">{quantity}</h5>
              </div>
              <a href="#!" style={{color: "#cecece"}} onClick={(e) => {addItem(e, item)}}><MDBIcon className='plus-circle scale-ctrl' fas icon="plus-circle" /></a>
              
              
              <div style={{width: "80px"}}>
                <h5 className="mb-0">{`$${total.toFixed(2)}`}</h5>
              </div>
              
              <a href="#!" style={{color: "#cecece"}} onClick={(e) => {trashItems(e, item)}}><MDBIcon className='trash ' fas icon="trash-alt" size='lg'/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard