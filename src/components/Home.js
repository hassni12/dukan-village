import React, { Fragment, useState, useEffect, useContext } from 'react';
import CustomerReviews from './includes/CustomerReviews';
import ProductSuggestion from './includes/ProductSuggestion';
import http from '../config/axios';
import {toast} from 'react-toastify'
import ProductCard from './mics/HomeProductCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

var scroll = React.createRef();

const Home = (props) => {
    const settings = useContext(AuthContext);
    const [recentProducts, setRecentProducts] = useState([]);
    const [famous, setFamous] = useState(null);

    const onLoadFamouse =  async () => {
        try {
            const { data } = await http.get(`/products/famous`);
            console.log("FAMOUSE: ", data);
            setFamous(data);
        } catch (error) {
            toast.warn(error.response);
        }

    }
    useEffect(() => {
        window.scrollTo(0, 0)
        onLoadFamouse();
        if (settings.country == '' && settings.states == '') {
            loadRecentProducts();
        }
        else if(settings.country !== '' && settings.states !== ''){
            loadRecentProducts();
        }
        else{
        }
 
        
    }, [settings.country , settings.states])

    const loadRecentProducts = async () => {
        try {
            const { data } = await http.get(`/products/recent` , { params: {
                country: settings.country,
                state: settings.states
            }});
            setRecentProducts(data);
        } catch (error) {
            toast.warn(error.response);
        }
    }


    return (
        <Fragment>
            <section className="header-section">
                    <div className="left ">
                        <div className="wow fadeInDownBig fadeIn" data-wow-duration="1.3s" data-wow-delay="1.1s">
                     <img src="images/header-top.png" className="img-fluid img-1 rotating" alt=""/>
                     </div> 
                     <div className="wow fadeInRight" data-wow-duration="1.3s" data-wow-delay="1.1s">
                     <img src="images/header-1.png" className="img-fluid img-2 rotating" alt=""/>
                     </div>
                     <img src="images/header-2.png" className="img-fluid img-3 wow bounceIn" data-wow-duration="1.3s" data-wow-delay=".1.1s" alt=""/>
                     <img src="images/header-11.png" className="img-fluid img-12 wow bounceIn" data-wow-duration=".6s" data-wow-delay=".5s" alt=""/> 
                     </div>
                     <div className="right">
                     <img src="images/header-4.png" className="img-fluid img-4 wow bounceIn" data-wow-duration=".6s" data-wow-delay=".5s" alt=""/>
                     <img src="images/header-5.png" className="img-fluid img-5 wow bounceIn" data-wow-duration=".9s" data-wow-delay=".9s" alt=""/>
                     <div className="header-mobile-1 wow rotateInDownRight" data-wow-duration=".6s" data-wow-delay=".5s">
                     <img src="images/header-3.png" className="img-fluid img-6 " alt=""/>
                     <img src="images/header-6.png" className="img-fluid img-7 wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="1s" alt=""/> 
                     </div>
                     <div className="header-mobile-2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">
                     <img src="images/header-9.png" className="img-fluid img-10 wow fadeInDown" data-wow-duration="2s" data-wow-delay="2s" alt=""/> 
                     <img src="images/header-8.png" className="img-fluid img-9 " alt=""/> 
                     <img src="images/header-7.png" className="img-fluid img-8 wow fadeInUp" data-wow-duration="2s" data-wow-delay="2s" alt=""/> 
                     </div>
                     <div className="header-10 wow fadeInLeft" data-wow-duration="1.4s" data-wow-delay="1.1s">
                     <img src="images/header-10.png" className="img-fluid img-11 rotating" alt=""/> 
                     </div>
                     </div> 
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12">
                                <h4 className="pink">VILLAGE DUKAAN</h4>
                                <h1 className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".6s">Discover the unique village items!</h1>
                                <Link to="/categories" className="pink-btn wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".8s">Learn More</Link>
                                <Link to="/products" className="yel-btn wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".8s">Shop Now</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12">
                                <button id="animates" onClick={() => document.querySelector('.all-need').scrollIntoView()} className="black-btn">
                                    <i className="fa fa-arrow-down" />
                                </button>
                            </div>
                        </div>
                        </div>
                    
                
            </section>
            {/*all-need start here*/}
            <section ref={scroll} className="all-need">
                <div className="container">
                    <div className="top">
                        <div className="row">
                            <div className="col-lg-6 col-12 wow fadeIn" data-wow-duration=".5s" data-wow-delay=".5s">
                                <div className="left">
                                    <h2>All You Need to Know About <span className="pink">Village Dukaan</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 ">
                                <div className="right">
                                    <p className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">VillageDukaan which is trading under Vaishnavi VillageDukaan E-Commerce Private Limited is a startup opened in November 2017. We started selling products at the company address from 2nd May 2018 and the website is going live now to our customers in and around Rajahmundry. </p>
                                    <Link to="/about-us" className="pink-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">read more</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <ul className="d-md-flex w-100 ">
                            <li className="box white-box d-flex w-100 boxer wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">
                                <div className="media align-items-center"> 
                                <img src="images/all-1.png" className="img-fluid" alt="" />
                                    <div className="media-body">
                                        <h4 className=" wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".7s">Mon - Sun <span>6:00AM - 10:00PM</span></h4>
                                        <p className="wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">Working Days/Hours!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="box yel-bg d-flex w-100 boxer wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".8s">
                                <div className="media align-items-center"> <img src="images/all-2.png" className="img-fluid" alt="" />
                                    <div className="media-body">
                                        <h4 className=" wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1s">Free Return</h4>
                                        <p className="wow fadeInUp" data-wow-duration="1.7s" data-wow-delay="1.3s">*14 days money back guaratee!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="box pink-bg d-flex w-100 boxer wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1s">
                                <div className="media align-items-center"> <img src="images/all-3.png" className="img-fluid" alt="" />
                                    <div className="media-body">
                                        <h4 className=" wow fadeInUp" data-wow-duration="1.6s" data-wow-delay="1.4s">Only Natural Food</h4>
                                        <p className=" wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.6s">Minimum Order Value!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*all-need end here*/}
            {/*our product start here*/}
            <section className="our-product">
                <div className="container">
                    <div className="product-top d-md-flex align-items-center justify-content-md-between">
                        <div className="left">
                            <h2 className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">See <br />Our Products</h2>
                        </div>
                        <div className="right">
                            <Link to="/categories" className="yel-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">View All Categories</Link>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <div className="row">
                            {recentProducts.map(product => <ProductCard product={product} key={product.id} />)}
                        </div>
                    </div>
                </div>
            </section>
            {/*our product end here*/}
            {/*village restaurant start here*/}
            <section className="village-res ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="left boxer">
                                <div className="wow fadeIn img-res" data-wow-duration="1.4s" data-wow-delay="1.1s">
                                <img src="images/res-bg.png" className="w-100 h-auto" alt="" />
                                </div>
                                <img src="images/res-1.png" className="img-fluid" alt="" />
                                <h1 className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".6s">Village <br />Restaurant</h1>
                                <p className="wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".7s">We Deliver Village Food &amp; Drink</p>
                               
                                <Link to="/products?category=pickles" className="yel-btn wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">Order Now</Link>
                            </div>
                        </div>
                        <div style={{cursor: 'pointer'}} onClick={ () => props.history.push('/products?category=pickles') } className="col-lg-4 col-12">
                            <div className="right">
                            <h2 className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">Hand <span className="text-1">Made </span><span className="text-2">Pickles</span></h2>
                                {/* <h1 className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">5% <span className="text-1">Everyting</span><span className="text-2">off</span></h1>
                                <h6 className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".6s">On Your First Order</h6>
                                <h4 className="wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".8s">Use Order: <span className="pink">Welcome</span></h4> */}
                                <img src="images/res-2.png" className="img-fluid wow fadeInUp" data-wow-duration="1.4s" data-wow-delay="1.1s" alt="bottle" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*village restaurant end here*/}
            {/*village app start here*/}
            <section className="village-app">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-lg-5 position-relative">
                            <div className="left">
                                <img src="images/app-img-1.png" className="img-fluid img-1 wow fadeInLeft" data-wow-duration="1.3s" data-wow-delay="1.1s" alt="" />
                                <img src="images/app-img-2.png" className="img-fluid img-2 wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".7s" alt="" />
                                <img src="images/app-img-3.png" className="img-fluid img-3 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="1.3s" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="right">
                                <h1 className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">Download Village <br />Dukaan App Today</h1>
                                <div className="bottom">
                                    {/* <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
                                    <a href="https://apps.apple.com/in/app/villagedukaan/id1442479463" className="wow fadeInUp "data-wow-duration="1.1s" data-wow-delay=".8s"><img src="images/app.png" className="img-fluid" alt="" /></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.villagedukaan.villagedukaanandroidapp&hl=en" className="wow fadeInUp "data-wow-duration="1.4s" data-wow-delay="1s"><img src="images/play.png" className="img-fluid" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*village app end here*/}
            {/*daal start here*/}
            <section className="daal">
                <div className="container">
                    <div className="daal-inner yel-bg">
                        <div className="row">
                            <div className="col-12" style={{cursor:'pointer'}}>
                                <div className="d-md-flex justify-content-between align-items-center">
                                    <div>
                                        <h1 className="wow fadeInUp "data-wow-duration=".5s" data-wow-delay=".5s">Our<br /> Famous Products</h1>
                                        <Link to="/products?category=dal" className="pink-btn wow fadeInUp "data-wow-duration=".8s" data-wow-delay=".6s">Order Now</Link>
                                    </div>
                                    <div>
                                        <ul>
                                            {famous && famous.map( (item , index) => (
                                                <li key={index} onClick={ () => props.history.push(`products/${item.slug}`)} className="wow fadeInUp "data-wow-duration="1.1s" data-wow-delay=".8s">
                                                    <i className="fa fa-check-circle pink" />{item && item.name}</li>
                                            ))}
                                            
                                            {/* <li className="wow fadeInUp "data-wow-duration="1.4s" data-wow-delay="1.2s"><i className="fa fa-check-circle pink" />Chana Dal</li>
                                            <li className="wow fadeInUp "data-wow-duration="1.7s" data-wow-delay="1.4s"><i className="fa fa-check-circle pink" />Moong Dal </li>
                                            <li className="wow fadeInUp "data-wow-duration="2.1s" data-wow-delay="1.7s"><i className="fa fa-check-circle pink" />Toor Dal</li>
                                            <li className="wow fadeInUp "data-wow-duration="2.4s" data-wow-delay="2.1s"><i className="fa fa-check-circle pink" />Urid Dal Chilka <br />&amp; Many More....</li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="wow fadeInUp daal-img" data-wow-duration="1s" data-wow-delay=".8s">
                                <img src="images/daal.png" className="img-fluid rotating" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*daal end here*/}
            
            <CustomerReviews />
            <ProductSuggestion />
        </Fragment>
    );
}

export default Home;