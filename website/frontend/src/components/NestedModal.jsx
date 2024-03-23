import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {AuthContext} from '../context/AuthContext'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NestedModal = ({product}) => {
  const {cart, addItemToCart} = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const addItem = async (e, product) => {
    e.preventDefault()
    await addItemToCart(product)
    localStorage.setItem('cart', JSON.stringify(cart));
    
  }

  const handleClickOpen = async (e, product) => {
    await addItem(e, product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={(e) => {handleClickOpen(e, product)}}>Add To Cart</Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        // style={{height:}}
      >
        <DialogTitle className='d-flex justify-content-center'>Cart Updated!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <strong>{`A ${product.name} has successfully been added to your cart.`}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NestedModal;