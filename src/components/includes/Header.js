import React, { useContext, useEffect, useState } from 'react';
import { NavLink , Link , useLocation } from 'react-router-dom';
import SearchBox from './SearchBox';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const [path , setPath] = useState('');
    const auth = useContext(AuthContext);
    let location = useLocation();

    const onLogout = () => {
        auth.onLoggedOut();
        localStorage.removeItem("access_token");
    }
    
    const { mycart } = auth;
    useEffect( () => {
        if(window.innerWidth < 992){
            document.getElementById("navigation1").classList.add("navigation-portrait");
        }else {
            document.getElementById("navigation1").classList.remove("navigation-portrait");
        }
        var aTag = document.createElement("span");
                aTag.className = "nav-menus-wrapper-close-button";
                aTag.innerText = "X";
                aTag.addEventListener("click", function () {
                    onToggleNav();
                });
            let parent = document.getElementById("navwrapper");
            parent.appendChild(aTag);
            
    },[]);

    const onToggleNav = () => {
        document.querySelector(".nav-menus-wrapper").classList.toggle("nav-menus-wrapper-open");
    }
    window.addEventListener("resize", function(event) {
       // console.log(window.innerWidth);
        if(window.innerWidth < 992){
            document.getElementById("navigation1").classList.add("navigation-portrait");
        }else {
            document.getElementById("navigation1").classList.remove("navigation-portrait");
        }
    })

    return (
        <header className="header_area index-header">
            <div className="container">
                <div className="main_header_area animated">
                    <nav id="navigation1" className="navigation">
                        <div className="nav-header">
                            <NavLink className="nav-brand" to="/">
                                <img src="images/logo.png" alt="" />
                            </NavLink>
                            <div onClick={onToggleNav} className="nav-toggle" />
                        </div>
                        <div id="navwrapper" className="nav-menus-wrapper">
                                
                            {auth.isAuthenticated ? <ul className="user-nav user-pro">
                                <li className="dropdown dropdown-user nav-item">
                                    <a className="dropdown-toggle nav-link dropdown-user-link" href="#/" data-toggle="dropdown">
                                        <span className="avatar avatar-online">
                                            <img src={auth.user.image || `https://ui-avatars.com/api/${auth.user.first_name}/64/615bbf/fff/2/0.5/true/true/true` } className="img-fluid" alt="avatar" />
                                        </span>
                                        <span className="user-name">{auth.user.first_name} {auth.user.last_name}</span>
                                    </a>
                                    <div onClick={onToggleNav} className="dropdown-menu dropdown-menu-right">
                                        <NavLink className="dropdown-item" to="/profile">
                                            <i className="fas fa-user-circle" />Profile</NavLink>
                                        <NavLink className="dropdown-item" to="/order-log">
                                            <i className="fas fa-clipboard-list" />Order Log</NavLink>
                                        <NavLink className="dropdown-item" to="/wishlist">
                                            <i className="fas fa-heart" />Wishlist</NavLink>
                                        {/* <a className="dropdown-item" href="/contact">
                                            <i className="fas fa-phone fa-rotate-90" />Contact Us</a>
                                        <div className="dropdown-divider" /> */}
                                        <NavLink onClick={onLogout} className="dropdown-item logout" to="/login">Logout
                                            <i className="fas fa-sign-in-alt" />
                                        </NavLink>
                                    </div>
                                </li></ul> :
                                <ul onClick={onToggleNav} className="user-nav">
                                    <li><NavLink to="/login" className="pink-btn">login</NavLink></li>
                                    <li><NavLink to="/register" className="yel-btn">register</NavLink></li>
                                </ul>
                            }

                            <ul className="nav-menu align-to-right">
                                <li onClick={onToggleNav}  className={location.pathname === "/" ? "active" : ""}><NavLink activeClassName="active" to="/">Home</NavLink></li>
                                <li onClick={onToggleNav}  className={location.pathname === "/products" ? "active" : ""}><NavLink activeClassName="active" to={{ pathname: "/products" }}>All Products</NavLink></li>
                                <li onClick={onToggleNav}  className={location.pathname === "/categories" ? "active" : ""}><NavLink to="/categories">Category</NavLink></li>
                                {/* <li><NavLink to="/categories">Shop By</NavLink></li> */}
                                {/* <li onClick={onToggleNav}  className={location.pathname === "/products?location=current_location" ? "active" : ""}><Link to={"/products?location=current_location"}>Shop By Area</Link></li> */}
                                <li onClick={onToggleNav}  className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">contact us</Link></li>
                                <SearchBox onToggleNav={onToggleNav} />
                                <li onClick={onToggleNav} >
                                    <NavLink to="/my-cart">
                                        <img src={`${process.env.PUBLIC_URL}/images/cart-img.png`} className="img-fluid" alt="" />
                                        {auth.cart.length > 0 ? <span className="noti-tag">{auth.cart.length}</span> : null}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;