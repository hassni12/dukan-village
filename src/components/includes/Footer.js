import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import http from '../../config/axios';
import { toast } from 'react-toastify';

const Header = () => {
    const [email, setEmail] = useState('');
    const settings = useContext(AuthContext);
    const onSubscribe = () => {
        http.post('/subscribe', { email }).then(res => {
            toast.success('Subscribed successfully');
        }).catch(err => {
            toast.error(err.response.data.errors.email[0] || 'Something went wrong');
        });
    }

    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer footer-1"> <Link to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="img-fluid" alt="" /></Link>
                                <ul>
                                    <li><a href="https://g.page/VillageDukaan?share" target="_blank" rel="noopener noreferrer">Address: {settings.settings.store_address_1}</a></li>
                                    <li><a href="mailto:support@villagedukaan.com">Email : {settings.settings.store_email}</a></li>
                                    <li><a href="tel:0883-2431098">tell : {settings.settings.store_phone}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer footer-2">
                                <h6>QUICK LINKS</h6>
                                <ul>
                                    <li><Link to="/about-us"><i className="fa fa-angle-right" />About Village Dukaan</Link></li>
                                    {/* <li><a href="#/"><i className="fa fa-angle-right" />Careers</a></li> */}
                                    <li><Link to="/terms-of-using-website"><i className="fa fa-angle-right" />Terms Of Using Website</Link></li>
                                    <li><Link to="/your-security"><i className="fa fa-angle-right" />Your Security</Link></li>
                                    <li><Link to="/cookie-policy"><i className="fa fa-angle-right" />Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer footer-3">
                                <h6>Customer Service</h6>
                                <ul>
                                    <li><Link to="/contact"><i className="fa fa-angle-right" />Contact us</Link></li>
                                    <li><Link to="/delivery-information"><i className="fa fa-angle-right" />Our Delivery Information</Link></li>
                                    <li><Link to="/servive-charges-policy"><i className="fa fa-angle-right" />Our Service Charges Policy</Link></li>
                                    <li><Link to="/return-policy"><i className="fa fa-angle-right" />Our Return Policy</Link></li>
                                    <li><Link to="/store"><i className="fa fa-angle-right" />Store Pick-ups</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <div className="footer footer-4">
                                <h6>Get In Touch</h6>
                                <p>Enter your email and we'll send you more information.</p>
                                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email" />
                                    <button onClick={onSubscribe} type="submit" className="pink-btn">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>© Copyright {(new Date()).getFullYear()} {settings.settings.store_name}. All Right Reserved.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul>
                                <li><a href={settings.settings.facebook}><i className="fab fa-facebook-f" /></a></li>
                                <li><a href={settings.settings.twitter}><i className="fab fa-twitter" /></a></li>
                                <li><a href={settings.settings.linkedin}><i className="fab fa-linkedin-in" /></a></li>
                                <li><a href={settings.settings.youtube}><i className="fab fa-youtube" /></a></li>
                                <li><a href={settings.settings.instagram}><i className="fab fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >


    );
}

export default Header;