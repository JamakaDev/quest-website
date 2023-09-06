import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, Suspense} from 'react'

import {AuthProvider} from './context/AuthProvider'

import Header from './components/Header'
import Loading from './components/Loading'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import OrderPage from './pages/OrderPage'
import CartPage from './pages/CartPage'


import './App.css'


const App = () => {

  return (     
    <div className='App'>
        <Router>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path='/' exact element={<Suspense fallback={<Loading />}><LandingPage/></Suspense>} />
              <Route path='/cart'   element={<Suspense fallback={<Loading />}><CartPage/></Suspense>} />
              <Route path='/home'   element={<Suspense fallback={<Loading />}><HomePage/></Suspense>} />
              <Route path='/order'  element={<Suspense fallback={<Loading />}><OrderPage/></Suspense>} />
              <Route path='/signin' element={<Suspense fallback={<Loading />}><SignInPage/></Suspense>} />
              <Route path='/signup' element={<Suspense fallback={<Loading />}><SignUpPage/></Suspense>} />
              
              <Route path='/loading' element={<Loading />}/>
            </Routes>
          <Footer/>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
