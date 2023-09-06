import React from 'react'
import { MDBBtn, MDBIcon, MDBNavbar } from 'mdb-react-ui-kit';

const Footer = (props) => {
  
  return (
    <MDBNavbar fixed='bottom'  dark bgColor='dark' className="d-flex flex-column flex-md-row text-center text-md-start justify-content-start px-xl-5 bg-primary" style={{width:'100%', height:'50px'}}>
        
        <div className="mb-3 mb-md-0" style={{ color: '#abcdef', paddingRight:'60%'}}>
          Copyright © 2023. All rights reserved.
        </div>
        <h5 style={{paddingRight:'35px', color:'#abcdef'}}>Check us out on 👉</h5>
        
          <MDBBtn tag='a' color='none' className='mx-3 scale-ctrl' >
            <MDBIcon fab icon='google' size="lg" className='soc-icon'/>
          </MDBBtn>
          
          <MDBBtn tag='a' color='none' className='mx-3 scale-ctrl' >
            <MDBIcon fab icon='facebook-f' size="lg" className='soc-icon'/>
          </MDBBtn>
          
          <MDBBtn tag='a' color='none' className='mx-3 scale-ctrl' >
            <MDBIcon fab icon='twitter' size="lg" className='soc-icon'/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3 scale-ctrl' >
            <MDBIcon fab icon='linkedin-in' size="lg" className='soc-icon'/>
          </MDBBtn>
          
          <MDBBtn tag='a' color='none' className='mx-3 scale-ctrl' >
            <MDBIcon fab icon='github' size="lg" className='soc-icon'/>
          </MDBBtn>
        

      </MDBNavbar>
  )
}

export default Footer