import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import ProductCard from '../components/ProductCard'
import {MDBRow, MDBCol, MDBContainer} from 'mdb-react-ui-kit';

import '../App.css'

const HomePage = (props) => {

  const {user, authTokens, logoutUser} = useContext(AuthContext)

  


  return (
    <div className="container py-5 my-container">

    </div>
    )
  }
  
  export default HomePage
  