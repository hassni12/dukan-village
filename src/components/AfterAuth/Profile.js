import React from 'react';
import { NavLink } from 'react-router-dom';
import http from '../../config/axios';
import axios from 'axios';

class Profile extends React.Component {
    state = {
        profile: null
    }
    onPageLoad = async () => {
        console.dir(axios);
        const { data } = await http.get(`/account/profile`);
        this.setState({
            profile: data
        });
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        this.onPageLoad();
    }
    render() {
        const { profile } = this.state;
        return (profile != null ?
            <div>
                <section className="inner-header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12">
                                <h1>Profile</h1>
                                <h4 className="pink">Discover the unique village items!</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/*inner-header-section end here*/}
                {/*profile start here*/}
                <section className="profile-main p-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5>Profile Information</h5>
                            </div>
                        </div>
                        <div className="profile-top">
                            <div className="row">
                                <div className="col-lg-9 col-12 ">
                                    <div className="d-sm-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="media align-items-center">
                                                <img src={profile.image || `https://ui-avatars.com/api/${profile.first_name}/64/615bbf/fff/2/0.5/true/true/true` } className="img-fluid img-rounded" alt="" />
                                                <div className="media-body">
                                                    <h4 className="yel">{ profile.first_name} { profile.last_name !== "null" ? profile.last_name : ""}</h4>
                                                    <p><i className="fa fa-phone" />Email: { profile.email !== "null" ? profile.email : "N/A"}</p>
                                                    <p><i className="fa fa-envelope" />Phone: { profile.phone !== "null" ? profile.phone : "N/A"}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <NavLink to="/profile/edit" className="pink-btn">edit profile</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-bottom mt-5">
                            <div className="row ">
                                <div className="col-12 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <p>first Name</p>
                                            <h5>{ profile.first_name !== "null" ? profile.first_name : "N/A"}</h5>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <p>Last Name</p>
                                            <h5>{ profile.last_name !== "null" ? profile.last_name : "N/A"}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p>Contact</p>
                                            <h5>{profile.phone !== "null" ? profile.phone : "N/A"}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-bottom">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h6 className="yel">Billing Address</h6>
                                    <h5>{profile.billing_address !== "null" ? profile.billing_address : "N/A"}</h5>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <p>City </p>
                                            <h5>{profile.billing_city !== "null" ? profile.billing_city : "N/A"}</h5>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <p>Zipcode </p>
                                            <h5>{profile.billing_zip !== "null" ? profile.billing_zip : "N/A"}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <p>State </p>
                                            <h5>{profile.billing_state !== "null" ? profile.billing_state : "N/A"}</h5>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <p>Country</p>
                                            <h5>{profile.billing_country !== "null" ? profile.billing_country : "N/A"}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h6 className="yel">Shipping Address</h6>
                                    <h5>{profile.shipping_address !== "null" ? profile.shipping_address : "N/A"}</h5>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <p>City </p>
                                            <h5>{profile.shipping_city !== "null" ? profile.shipping_city : "N/A"}</h5>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <p>Zipcode </p>
                                            <h5>{profile.shipping_zip !== "null" ? profile.shipping_zip : "N/A"}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <p>State </p>
                                            <h5>{profile.shipping_state !== "null" ? profile.shipping_state : "N/A"}</h5>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <p>Country</p>
                                            <h5>{profile.shipping_country !== "null" ? profile.shipping_country : "N/A"}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-12 col-md-6">
                                    <h6 className="yel">Security</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4>Password</h4>
                                        <button className="pink">change</button>
                                    </div>
                                    <h3><i className="fa fa-circle" /><i className="fa fa-circle" /><i className="fa fa-circle" /><i className="fa fa-circle" /><i className="fa fa-circle" /></h3>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
            : null
        );
    }
}

export default Profile;