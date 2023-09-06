import '../App.css'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
}
from 'mdb-react-ui-kit';
import { AuthContext } from '../context/AuthContext';

const STATES = [
  ['Alabama', 'AL'],
  ['Alaska', 'AK'],
  ['Arizona', 'AZ'],
  ['Arkansas', 'AR'],
  ['American Samoa', 'AS'],
  ['California', 'CA'],
  ['Colorado', 'CO'],
  ['Connecticut', 'CT'],
  ['Delaware', 'DE'],
  ['District of Columbia', 'DC'],
  ['Florida', 'FL'],
  ['Georgia', 'GA'],
  ['Guam', 'GU'],
  ['Hawaii', 'HI'],
  ['Idaho', 'ID'],
  ['Illinois', 'IL'],
  ['Indiana', 'IN'],
  ['Iowa', 'IA'],
  ['Kansas', 'KS'],
  ['Kentucky', 'KY'],
  ['Louisiana', 'LA'],
  ['Maine', 'ME'],
  ['Maryland', 'MD'],
  ['Massachusetts', 'MA'],
  ['Michigan', 'MI'],
  ['Minnesota', 'MN'],
  ['Mississippi', 'MS'],
  ['Missouri', 'MO'],
  ['Montana', 'MT'],
  ['Nebraska', 'NE'],
  ['Nevada', 'NV'],
  ['New Hampshire', 'NH'],
  ['New Jersey', 'NJ'],
  ['New Mexico', 'NM'],
  ['New York', 'NY'],
  ['North Carolina', 'NC'],
  ['North Dakota', 'ND'],
  ['Northern Mariana Islands', 'MP'],
  ['Ohio', 'OH'],
  ['Oklahoma', 'OK'],
  ['Oregon', 'OR'],
  ['Pennsylvania', 'PA'],
  ['Puerto Rico', 'PR'],
  ['Rhode Island', 'RI'],
  ['South Carolina', 'SC'],
  ['South Dakota', 'SD'],
  ['Tennessee', 'TN'],
  ['Texas', 'TX'],
  ['Trust Territories', 'TT'],
  ['Utah', 'UT'],
  ['Vermont', 'VT'],
  ['Virginia', 'VA'],
  ['Virgin Islands', 'VI'],
  ['Washington', 'WA'],
  ['West Virginia', 'WV'],
  ['Wisconsin', 'WI'],
  ['Wyoming', 'WY']
]


const SignUpPage = () => {
  const {signupUser} = useContext(AuthContext)

  useEffect(() => {

  },[])

  return (
    <form onSubmit={signupUser}>
      <MDBContainer  className='my-4'>
        <MDBRow className='g-0 align-items-center'>
          <MDBCol col='6'>
            <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.75)',  backdropFilter: 'blur(5px)', zIndex:'999'}}>
              <MDBCardBody className='p-5 shadow-5 text-center'>
                <h4>Registration Form</h4>

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-3' name='firstname' label='First name' id='form1' type='text'/>
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-3' name='lastname' label='Last name' id='form2' type='text'/>
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-3' name='username' label='Username' id='form3' type='username'/>
                <MDBInput wrapperClass='mb-3' name='password' label='Password' id='form4' type='password'/>
                <MDBInput wrapperClass='mb-3' name='email' label='Email address' id='form3' type='email'/>
                <MDBInput wrapperClass='mb-3' name='company' label='Company name' id='form3' type='text'/>
                <MDBInput wrapperClass='mb-3' name='address' label='Street address' id='form3' type='text'/>

                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-2' name='city' label='City' id='form1' type='text'/>
                  </MDBCol>

                  <MDBCol col='6'>
                    <select className="form-control" name='state' style={{background: 'hsla(0, 0%, 85%, 0.25)',  backdropFilter: 'blur(5px)'}}>
                      <option className='my-option' selected>State</option>
                      {STATES.map((state) => (
                      <option className='my-option' value={state[0]}>{state[1]} : {state[0]}</option>))}
                    </select>

                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-2' name='postal' label='Postal code' id='form2' type='text'/>
                  </MDBCol>
                </MDBRow>

                
                <MDBBtn className='w-100 mb-2' size='md'>sign up</MDBBtn>
                

                <div className="text-center">

                  <p>or sign up with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3 ' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="xl" className='soc-icon'/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3 ' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="xl" className='soc-icon'/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3 ' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="xl" className='soc-icon'/>
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3 ' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="xl" className='soc-icon'/>
                  </MDBBtn>

                </div>
      
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol col='6'>
            <img src="media/auth.jpg" className="w-100 rounded-4 shadow-4" width='500' height='700' style={{opacity:'90%'}}
              alt="" fluid/>
          </MDBCol>
    
        </MDBRow>
    
      </MDBContainer>
    </form>
  );
}

export default SignUpPage;


// return (
//   <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

//     <MDBRow >

//       <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

//         <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
//           The best offer <br />
//           <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
//         </h1>

//         <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Eveniet, itaque accusantium odio, soluta, corrupti aliquam
//           quibusdam tempora at cupiditate quis eum maiores libero
//           veritatis? Dicta facilis sint aliquid ipsum atque?
//         </p>

//       </MDBCol>

//       <MDBCol md='6' className='position-relative'>

//         <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//         <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//         <MDBCard className='my-5 bg-glass' style={{opacity: '100%'}}>
//           <MDBCardBody className='p-5'>

            

//           </MDBCardBody>
//         </MDBCard>

//       </MDBCol>

//     </MDBRow>

//   </MDBContainer>
// );