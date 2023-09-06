import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBBadge,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';

import {useContext} from 'react'


import VerticalRule from './VerticalRule'
import {AuthContext} from '../context/AuthContext'

const Header = (props) => {
  
  const {cart, user, logoutUser} = useContext(AuthContext)
  
  return (
    <header >
      <MDBNavbar fixed='top' expand='lg' dark bgColor='dark' >
        <MDBContainer fluid>
          
          <MDBNavbarLink className='fa-spin ' href='/' style={{animationDuration: '5s', marginRight:'1%'}}>
            <img className='logo scale-ctrl' src='media\logo.png' width="56" height="48" />
          </MDBNavbarLink>
          
          
          <MDBNavbarNav className='mb-2 mb-lg-0 justify-content-end' style={{fontSize:'medium'}}>
                        
            <MDBNavbarItem className='active'>
              <MDBNavbarLink href='/home' className='nblink scale-ctrl' >Home</MDBNavbarLink>
            </MDBNavbarItem>
            
            <VerticalRule/>
            
            <MDBNavbarItem>
              <MDBNavbarLink href='/order' className='nblink scale-ctrl'>Order</MDBNavbarLink>
            </MDBNavbarItem>

            <VerticalRule/>
                        
            <MDBNavbarItem>
              <MDBNavbarLink href='/cart' className='nblink scale-ctrl' > Cart <span></span> 
                <MDBIcon fas icon="shopping-cart" size='lg'/>
                <MDBBadge pill color='danger'>
                  {cart.length}
                </MDBBadge>
              </MDBNavbarLink>
              
            </MDBNavbarItem>
            
            <VerticalRule/>

            {user ? (
              <MDBNavbarItem>
                <MDBNavbarLink className='scale-ctrl' onClick={logoutUser}>Sign Out</MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href='/signin' className='nblink scale-ctrl'>Sign In</MDBNavbarLink>
              </MDBNavbarItem>
            )}

          </MDBNavbarNav>   

          <MDBIcon className='profile-icon scale-ctrl' far icon="user-circle" size='2x' onClick={() => {console.log('Clicked Profile Icon')}}/>
          
          
          
        </MDBContainer>
      </MDBNavbar>

    </header>
  );
}

export default Header;
