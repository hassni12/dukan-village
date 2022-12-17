import React from 'react';

const TopNav = () => {
    return (
        <div className="nav-menus-wrapper"><span className="nav-menus-wrapper-close-button">✕</span>
            <ul className="user-nav user-pro">
                <li className="dropdown dropdown-user nav-item"> <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown"> <span className="avatar avatar-online"> <img src="images/review-1.png" className="img-fluid" alt="avatar" /> </span> <span className="user-name">Mariana Alexander</span> </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="profile.php"><i className="fa fa-user-circle" />Profile</a>
                        <a className="dropdown-item" href="order-log.php"><i className="fa fa-clipboard-list" />Order Log</a>
                        <a className="dropdown-item" href="Wishlist.php"><i className="fa fa-heart" />Wishlist</a>
                        <a className="dropdown-item" href="contact-us.php"><i className="fa fa-phone" />Contact Us</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item logout" href="login.php">Logout<i className="fa fa-sign-in-alt" /></a>
                    </div>
                </li>
            </ul>
            <ul className="nav-menu align-to-right">
                <li className="active"><a href="index.php">Home</a></li>
                <li className><a href="all-products.php">All Products</a></li>
                <li className><a href="category.php">Category</a></li>
                <li><a href="shop-by.php">Shop By</a></li>
                <li><a href="local-area.php">Local Area</a></li>
                <li><a href="contact-us.php">contact us</a></li>
                <li className="search-main">
                    <div className="main-header__searchbar">
                        <div className="main-header__searchbar__curtain main-header__searchbar__curtain--1" />
                        <div className="main-header__searchbar__cont main-header__searchbar__curtain main-header__searchbar__curtain--2">
                            <div className="main-header__searchbar__input">
                                <form action method="get">
                                    <input type="text" name="pro-tit" placeholder="Start typing to search" autofocus />
                                    <input type="submit" defaultValue="Submit" className="hidden" />
                                </form>
                                <div className="main-header__searchbar__close"> <img src={`${process.env.PUBLIC_URL}/images/close-icon.png`} /> </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-header__search__toggle wow slideInDown"> <span className="icon-search"><i className="fa fa-search" /></span> </div>
                </li>
                <li> <a href="#"><img src="images/cart-img.png" className="img-fluid" alt="" /><span className="noti-tag">1</span></a> </li>
            </ul>
        </div>

    );
}

export default TopNav;