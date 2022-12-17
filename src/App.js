import React from 'react';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Category from './components/Category';
import Login from './components/authentications/Login';
import Register from './components/authentications/Register';
import Register2 from './components/authentications/Register_2';
import Register3 from './components/authentications/Register_3';
import ProductDetail from './components/AfterAuth/Product_Detail';
import Profile from './components/AfterAuth/Profile';
import OrderLog from './components/AfterAuth/Order_Log';
import Wishlist from './components/AfterAuth/WishList';
import EditProfile from './components/AfterAuth/Edit_Profile';
import ForgetPassword from './components/authentications/Forget_Password';
import ForgetPassword2 from './components/authentications/Forget_Password_2';
import ForgetPassword3 from './components/authentications/Forget_Password_3';
import MyCart from './components/MyCart';
import { BrowserRouter as Router, Switch , HashRouter  } from 'react-router-dom';
import PrivareRoute from './PrivateRoutes';
import PublicRoute from './PublicRoute';
import AuthContextProvider from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Checkout from './components/checkout/Checkout';
import OrderDetails from './components/AfterAuth/Order_Details';
import ContactUs from './components/AfterAuth/Contactus';
import TermsOfUsingWebsite from './components/includes/TermsOfUsingWebsite';
import AboutUs from './components/includes/AboutUs';
import YourSecurity from './components/includes/YourSecurity';
import CookiePolicy from './components/includes/CookiePolicy';
import ServiceChargesPolicy from './components/includes/ServiceChargesPolicy';
import DeliveryInformation from './components/includes/DeliveryInformation';
import ReturnPolicy from './components/includes/ReturnPolicy';
import Store from './components/includes/Store';

const App = ({ auth }) => {
    return (
        <AuthContextProvider auth={auth}>
            <ToastContainer />
            <HashRouter>
                <Switch>
                    <PublicRoute exact path="/" component={Home} />
                    <PublicRoute exact path="/my-cart" component={MyCart} />
                    <PrivareRoute exact path="/check-out" component={Checkout} />
                    <PublicRoute exact path="/products" component={AllProducts} />
                    <PublicRoute path="/products/:slug" component={ProductDetail} />
                    <PublicRoute path="/categories" component={Category} />
                    <PrivareRoute exact path="/order-log" component={OrderLog} />
                    <PrivareRoute path="/order-detail/:id" component={OrderDetails} />
                    <PrivareRoute path="/wishlist" component={Wishlist} />
                    <PrivareRoute exact path="/profile" component={Profile} />
                    <PrivareRoute path="/profile/edit" component={EditProfile} />

                    <PublicRoute exact path="/terms-of-using-website" component={TermsOfUsingWebsite} />
                    <PublicRoute exact path="/about-us" component={AboutUs} />
                    <PublicRoute exact path="/your-security" component={YourSecurity} />
                    <PublicRoute exact path="/cookie-policy" component={CookiePolicy} />
                    <PublicRoute exact path="/servive-charges-policy" component={ServiceChargesPolicy} />
                    <PublicRoute exact path="/return-policy" component={ReturnPolicy} />
                    <PublicRoute exact path="/store" component={Store} />
                    <PublicRoute exact path="/delivery-information" component={DeliveryInformation} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/contact" component={ContactUs} />
                    <PublicRoute exact path="/register" component={Register} />
                    <PublicRoute path="/register_2" component={Register2} />
                    <PublicRoute path="/register_3" component={Register3} />
                    <PublicRoute exact path="/forget_password" component={ForgetPassword} />
                    <PublicRoute path="/forget_password_2" component={ForgetPassword2} />
                    <PublicRoute path="/forget_password_3" component={ForgetPassword3} />
                </Switch>
            </HashRouter>
        </AuthContextProvider>
    );
}

export default App;
