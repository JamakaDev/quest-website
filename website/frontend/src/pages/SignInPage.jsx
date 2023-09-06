import React, { useContext, useEffect } from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import {AuthContext} from '../context/AuthContext'


const SignInPage = () => {
  let {loginUser} = useContext(AuthContext)
  

  return (
    <form onSubmit={loginUser} >
      <MDBContainer fluid className="p-3 my-5 signin" >
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="/media/signin.jpg" className="img-fluid" alt="Sample image" />
          </MDBCol>
          <MDBCol col='4' md='6'>

            <div className="divider d-flex align-items-center my-4" style={{marginLeft:'20%'}}>
              <h3 className="fw-bold mx-3 mb-0" >• Quest Business Solutions •</h3>
            </div>

            <MDBInput wrapperClass='mb-4' label='Username' name='username' id='formControlLg' type='username' size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Password' name='password' id='formControlLg' type='password' size="lg"/>

            <div className="d-flex justify-content-around mb-4">
              {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
              <a href="#">Forgot password?</a>
              <p className="small fw-bold ">Don't have an account? <a href="/signup" className="link-danger">Sign Up</a></p>
            </div>
            <div className='d-flex justify-content-around'>
            <div className='d-flex justify-content-center text-center text-md-start mt-4' >
              <MDBBtn className="mb-0 px-5 btn btn-outline-primary btn-out-hvr" size='lg' type='submit'>Sign In</MDBBtn> <span/>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='google' />
              </MDBBtn>
              
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              
              <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
              
              <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
              
              <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </div>
            </div>

          </MDBCol>
        </MDBRow>      
      </MDBContainer>
    </form>
  );
}

export default SignInPage





