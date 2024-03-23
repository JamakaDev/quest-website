import React, {useState, forwardRef, useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {MDBNavbarLink} from 'mdb-react-ui-kit'
import {AuthContext} from '../context/AuthContext'
import NestedModal from './NestedModal';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AlertDialogSlide = ({product}) => {
  const {cart, addItemToCart} = useContext(AuthContext)
  const [open, setOpen] = useState(false);

  const addItem = async (e, product) => {
    e.preventDefault()
    await addItemToCart(product)
    localStorage.setItem('cart', JSON.stringify(cart));
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MDBNavbarLink 
        className="d-flex justify-content-evenly align-items-center btn btn-outline-info mb-1 scale-ctrl text-dark details-btn" 
        style={{width: '100%', height:'36px', borderRadius: '2rem'}}
        onClick={handleClickOpen}
      >
        Click for Details
      </MDBNavbarLink>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{product.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {product.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions className='d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-space align-items-center' >
            <img src={product.logo_path} alt="" width='180' height='40'style={{marginRight:'5px'}}/>
            <h4 className="mb-1 me-2">Price:</h4>
            <h5 className="mb-1 me-1">${(product.retail_price).toFixed(2)}</h5>
          </div>
          <NestedModal product={product} />
          <Button onClick={handleClose}>Close Window</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default AlertDialogSlide;