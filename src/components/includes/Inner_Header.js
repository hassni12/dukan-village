import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import { AuthContext } from '../../context/AuthContext';
const Inner_Header = () => {

    const auth = useContext(AuthContext);

    const onLogout = () => {
        auth.onLoggedOut();
        localStorage.removeItem("access_token");
    }
    return (
        auth.isAuthenticated ?
            <header className="header_area index-header">
                <div className="container">
                    <div className="main_header_area animated">
                        <nav id="navigation1" className="navigation">
                            <div className="nav-header"> <a className="nav-brand" href="index.php"><img src="/images/logo.png" alt="" /> </a>
                                <div className="nav-toggle" />
                            </div>
                            <div className="nav-menus-wrapper">
                                <ul className="user-nav user-pro">
                                    <li className="dropdown dropdown-user nav-item">
                                        <a className="dropdown-toggle nav-link dropdown-user-link" href="#/" data-toggle="dropdown">
                                            <span className="avatar avatar-online">
                                                <img src={`${process.env.PUBLIC_URL}/images/review-1.png`} className="img-fluid" alt="avatar" />
                                            </span>
                                            <span className="user-name">{auth.user.first_name} {auth.user.last_name}</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <NavLink className="dropdown-item" to="/profile">
                                                <i className="fa fa-user-circle" />Profile</NavLink>
                                            <NavLink className="dropdown-item" to="/order-log">
                                                <i className="fa fa-clipboard-list" />Order Log</NavLink>
                                            <NavLink className="dropdown-item" to="/wishlist">
                                                <i className="fa fa-heart" />Wishlist</NavLink>
                                            <NavLink className="dropdown-item" to="/products">
                                                <i className="fa fa-phone" />Contact Us</NavLink>
                                            <div className="dropdown-divider" />
                                            <NavLink onClick={onLogout} className="dropdown-item logout" to="/login">Logout
                                            <i className="fa fa-sign-in-alt" />
                                            </NavLink>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="nav-menu align-to-right">
                                    <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                                    <li><NavLink activeClassName="active" to={{ pathname: "/products", state: { id: 1 } }}>All Products</NavLink></li>
                                    {/* <li><NavLink to="/category">Category</NavLink></li> */}
                                    <li><a href="#/">Shop By</a></li>
                                    <li><a href="#/">Local Area</a></li>
                                    <li><NavLink to="/products">contact us</NavLink></li>
                                    <SearchBox />
                                    <li> <a href="#/"><img src="/images/cart-img.png" className="img-fluid" alt="" /><span className="noti-tag">1</span></a> </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            : null
    );
}

export default Inner_Header;