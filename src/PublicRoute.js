import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            <Fragment>
                <Header />
                <Component {...props} />
                <Footer />
            </Fragment>
        )} />
    );
}

export default PrivateRoutes;
