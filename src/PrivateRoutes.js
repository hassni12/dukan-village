import React, { Fragment, useContext } from 'react';
import { Route , Redirect } from 'react-router-dom';
import Footer from './components/includes/Footer';
import Header from './components/includes/Header';
import { AuthContext } from './context/AuthContext';

const PrivateRoutes = ({ component: Component, ...rest }) => {

    const auth = useContext(AuthContext);

    return (
        <Route {...rest} render={(props) => (
            auth.isAuthenticated ?
                
                <Fragment>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </Fragment> 
                
                : <Redirect to={{pathname: '/login'}} />
        )} /> 
    );
}

export default PrivateRoutes;
