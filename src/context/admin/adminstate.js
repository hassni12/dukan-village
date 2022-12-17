import React, { useReducer } from 'react';
import http from '../../config/axios';
import { ALL_PRODUCTS, LOGIN_USER } from '../types';
import { toast } from 'react-toastify';
import adminContext from './AdminContext';
import adminReducer from './adminReducer';

const adminstate = props => {

    const AuthState = {
        isAuthenticated: false,
        user: undefined
    }
    const [state , dispatch] = useReducer(adminReducer, AuthState);

    //LOGIN
    const LoginUser = async (email, password) => {
        const { data } = await http.post("/auth/login", { email, password })
        dispatch({
            type: LOGIN_USER,
            payload: data
        });
    }


    //SHOW ALL PRODUCTS
    const AllProducts = async () => {
        const { data } = await http.get("/products");
        dispatch({
            type: ALL_PRODUCTS,
            payload: data.products.data
        });
        // setAllProducts(data.products.data);
        // console.log(data);
    }


    return <adminContext.Provider value={{
        loggedIn: state.loggedIn,
        token: state.token,
        LoginUser
    }}>
        {props.children}
    </adminContext.Provider>
}

export default adminstate;
