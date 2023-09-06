import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

class SecureRoute extends Route {
    constructor(props) {
        super(props)
        let {user} = useContext(AuthContext)
        this.state = {route: <Route {...this.props.rest} element={!user ? <Navigate to="/signin" /> : this.props.children} />}
    }
    
    render() {
        return this.state.route
    }
}



export default SecureRoute;