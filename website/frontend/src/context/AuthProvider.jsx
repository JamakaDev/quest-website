import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync()


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [cart, setCart] = useState(()=> (localStorage.getItem('cart') !== '[]' && localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])
    let [loading, setLoading] = useState(false)


    const navigate = useNavigate()

    let loginUser = async (e)=> {
        e.preventDefault()     
                
        let response = await fetch('http://127.0.0.1:8000/api/token/obtain/', {
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        
        let data = await response.json()
        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            // navigate('/home')
            navigate('/order')
        }else{
            alert('Something went wrong!')
            // navigate('/signin')
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        // navigate('/signin') 
    }

    let signupUser = async (e) => {
        e.preventDefault()

        let response = await fetch('http://127.0.0.1:8000/api/auth/signup/', {
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'first_name': e.target.firstname.value,
                'last_name': e.target.lastname.value,
                'username':e.target.username.value, 
                'password':e.target.password.value,
                'email':e.target.email.value,
                'company_name':e.target.company.value,
                'address':e.target.address.value,
                'city':e.target.city.value,
                'state':e.target.state.value,
                'postal_code':e.target.postal.value,
            })
        })
                
        if(response.status === 201){
            console.log('User created!')
            navigate('/signin')
        }else{
            alert('Something went wrong!')
        }
    }

    let updateToken = async () => {

        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let addItemToCart = (item) => {
        
        if (cart.length && cart !== '[]') {
            setCart(prevCart => [...cart, item]);        
        } else {
            setCart([item])    
        }
        
    }
    
    let removeItemFromCart = (item) => { 
        let isRemoved = false;
        let filteredCart = [];
                
        for (let itm of cart) {    
            if (itm.name !== item.name || isRemoved) {
                filteredCart.push(itm)
            } else {
                isRemoved = true
            }
        }
        setCart(filteredCart);
    }

    let trashItemsFromCart = (item) => {
        let filteredCart = []
        for (let itm of cart) {
            if (itm.name !== item.name) {
                filteredCart.push(itm)
            }
        }
        setCart(filteredCart);

    }

    let deleteAllFromCart = () => {
        setCart([])
    }

    let contextData = {
        user:       user,
        authTokens: authTokens,
        loginUser:  loginUser,
        logoutUser: logoutUser,
        signupUser: signupUser,

        cart:               cart,
        addItemToCart:      addItemToCart,
        removeItemFromCart: removeItemFromCart,
        trashItemsFromCart: trashItemsFromCart,
        deleteAllFromCart:  deleteAllFromCart
    }


    useEffect(()=> {

        if(loading && authTokens){
            updateToken()
        }
// 1000-millisecs * 60 = 1-minute * X = X-minutes (1440 = day)
        let delay = 1000 * 60 * 1440

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            } 
        }, delay)
        return ()=> clearInterval(interval)

    }, [authTokens, loading, cart])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}


