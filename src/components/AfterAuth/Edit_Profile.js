import React from 'react';
import Croppie from '../mics/Croppie';
import http from '../../config/axios';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown } from 'semantic-ui-react';
import { AuthContext } from '../../context/AuthContext';

class Edit_Profile extends React.Component {
    static contextType = AuthContext;
    state = {
        image: "",
        file: undefined,
        editing: false,
        profile: null,
        first_name: '',
        last_name: '',
        contact: '',
        billing_address: '',
        billing_city: '',
        billing_zip: '',
        billing_state: '',
        billing_country: '',
        shipping_address: '',
        shipping_city: '',
        shipping_country: '',
        shipping_state: '',
        shipping_zip: '',
        allStates: null,
        allCities: null,
        allStates1: null,
        allCities1: null,
        password: '',
    }

    onGetState = async () => {
        try {
            let country_id = this.context.settings.countries.filter((item) => item.value === this.state.billing_country)[0].id;
            const { data } = await http.get(`/settings/states/${country_id}`);
            this.setState({ allStates: data});
            // setAllStates(data);

        } catch (error) {
            // toast.error("States Not Found");
        }
    }

    onGetCity = async () => {
        try {
            let state_id = this.state.allStates.filter((item) => item.value === this.state.billing_state)[0].id;
            const { data } = await http.get(`/settings/cities/${state_id}`);
            this.setState({ allCities: data});
            // setAllCities(data);

        } catch (error) {
            // toast.error("Cities Not Found");
        }
    }

    onGetState1 = async () => {
        try {
            let country_id = this.context.settings.countries.filter((item) => item.value === this.state.shipping_country)[0].id;
            const { data } = await http.get(`/settings/states/${country_id}`);
            this.setState({ allStates1: data});
            // setAllStates1(data);

        } catch (error) {
            // toast.error("States Not Found");
        }
    }

    onGetCity1 = async () => {
        try {
            let state_id = this.state.allStates1.filter((item) => item.value === this.state.shipping_state)[0].id;
            const { data } = await http.get(`/settings/cities/${state_id}`);
            this.setState({ allCities1: data});
            // setAllCities1(data);
        } catch (error) {
            // toast.error("Cities Not Found");
        }
    }
    onPageLoad = async () => {
        const { data } = await http.get(`/account/profile`);
        this.setState({
            profile: data,
            image: data.image,
            first_name: data.first_name,
            last_name: data.last_name,
            contact: data.phone,
            billing_address: data.billing_address,
            billing_city: data.billing_city,
            billing_zip: data.billing_zip,
            billing_country: data.billing_country,
            billing_state: data.billing_state,
            shipping_address: data.shipping_address,
            shipping_city: data.shipping_city,
            shipping_zip: data.shipping_zip,
            shipping_country: data.shipping_country,
            shipping_state: data.shipping_state
        });
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.onPageLoad();
        this.onGetState();
        this.onGetCity();
        this.onGetState1();
        this.onGetCity1();
    }

    componentDidUpdate(prevProps , prevState){
        const { shipping_country , shipping_state , billing_country , billing_state } = this.state;
        if(prevState.billing_country !== billing_country){
            this.onGetState();
        }
        else if(prevState.billing_state !== billing_state){
            this.onGetCity();
        }
        else if(prevState.shipping_country !== shipping_country){
            this.onGetState1();
        }
        else if(prevState.shipping_state !== shipping_state){
            this.onGetCity1();
        }
    }

    onImageCropped = (data) => {
        this.setState({ editing: false, image: data })
        fetch(data)
            .then(res => res.blob())
            .then(blob => {
                this.setState({ file: new File([blob], "profile.png", { type: "image/png" }) });
            })
    };

    onImageCancel = () => {
        window.$('#croppieModal').modal('hide');
        this.setState({ editing: false })
    };

    profilePicChange = (fileChangeEvent) => {
        const file = fileChangeEvent.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            this.setState({ image: e.target.result, editing: true });
        }.bind(this);
        fileReader.readAsDataURL(file);
    };
    onProfileSave = async () => {
        const { first_name, file, last_name, contact, billing_address, billing_country, billing_city, billing_state, billing_zip, shipping_address, shipping_city, shipping_country, shipping_state, shipping_zip } = this.state;

        const fd = new FormData();
        fd.append('first_name', first_name);
        fd.append('last_name', last_name);
        fd.append('phone', contact);
        fd.append('billing_address', billing_address);
        fd.append('billing_city', billing_city);
        fd.append('billing_zip', billing_zip);
        fd.append('billing_country', billing_country);
        fd.append('billing_state', billing_state);
        fd.append('shipping_address', shipping_address);
        fd.append('shipping_city', shipping_city);
        fd.append('shipping_zip', shipping_zip);
        fd.append('shipping_country', shipping_country);
        fd.append('shipping_state', shipping_state);
        fd.append('file', file);

        const { data } = await http.post('/account/profile', fd);
        // window.location.reload();
        toast.success('Profile Updated');
        this.props.history.push({
            pathname: '/profile'
        });
    }

    onPasswordChange = async () => {
        const { password } = this.state;

        const fd = new FormData();
        fd.append('password', password);
        const { data } = await http.post('/account/password-change', fd);
        // window.location.reload();
        toast.success('Password Updated');
        this.props.history.push({
            pathname: '/profile'
        });
    }


    render() {
        const { settings } = this.context;
        const { profile, first_name, last_name, contact, billing_address, billing_country, billing_city, billing_state, billing_zip, shipping_address, shipping_city, shipping_country, shipping_state, shipping_zip , allCities , allCities1 , allStates , allStates1 } = this.state;
        return (
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
                <section className="profile-main p-80 edit-profile">
                    <Croppie src={this.state.image} shouldShow={this.state.editing} onCancel={this.onImageCancel} onCropped={this.onImageCropped} />
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
                                                <div className="attached">
                                                    <img src={this.state.image || `https://ui-avatars.com/api/${profile && profile.first_name}/64/615bbf/fff/2/0.5/true/true/true`} className="img-fluid img-rounded" alt="" />
                                                    <button type="file" onClick={e => document.getElementById('file').click()} className="change-cover">
                                                        <div className="ca"><i className="fa fa-camera" />
                                                        </div>
                                                    </button>
                                                    <input id="file" className="d-none" onChange={e => { this.profilePicChange(e); e.target.value = "" }} accept="image/png, image/jpeg" type="file" name="file" />
                                                </div>
                                                <div className="media-body">
                                                    <h4 className="yel">{profile && profile.first_name} {profile && profile.last_name}</h4>
                                                    <p><i className="fa fa-envelope" />Email: {profile && profile.email}</p>
                                                    <p><i className="fa fa-phone fa-rotate-90" />Phone: {profile && profile.phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="profile-bottom mt-5">
                                <div className="row mt-5">
                                    <div className="col-12 col-md-6">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <label>First Name</label>
                                                <input type="text" value={first_name} onChange={e => this.setState({ first_name: e.target.value })} className="form-control" />
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <label>Last Name</label>
                                                <input type="text" value={last_name} onChange={e => this.setState({ last_name: e.target.value })} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>Contact</label>
                                                <input type="text" readOnly value={contact} onChange={e => this.setState({ contact: e.target.value })} className="form-control" placeholder={8479846} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-bottom">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <h6 className="yel">Billing Address</h6>
                                            <label>Address</label>
                                            <input type="text" value={billing_address} onChange={e => this.setState({ billing_address: e.target.value })} className="form-control" placeholder="4663  Millbrook Road" />
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <label>Country</label>
                                                    <Dropdown
                                                        placeholder='Select Country'
                                                        search
                                                        selection
                                                        fluid
                                                        name="S_country"
                                                        value={billing_country}
                                                        onChange={(e, { value}) => {
                                                            this.setState({ billing_country: value });
                                                        }}
                                                        autoComplete="off"
                                                        options={settings.countries}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <label>State</label>
                                                    <Dropdown
                                                        placeholder='Select State'
                                                        fluid
                                                        selection
                                                        search
                                                        value={billing_state}
                                                        name="S_state"
                                                        autoComplete="off"
                                                        options={allStates}
                                                        onChange={(e, { value }) => this.setState({ billing_state: value  })}
                                                    />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <label>City</label>
                                                    <Dropdown
                                                        placeholder='Select State'
                                                        fluid
                                                        selection
                                                        search
                                                        value={billing_city}
                                                        autoComplete="off"
                                                        name="S_city"
                                                        options={allCities}
                                                        onChange={(e, { value }) => this.setState({ billing_city: value})}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <label>Zipcode</label>
                                                    <input type="text" value={billing_zip} onChange={e => this.setState({ billing_zip: e.target.value })} className="form-control" placeholder={39741} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <h6 className="yel">Shipping Address</h6>
                                            <label>Address</label>
                                            <input type="text" value={shipping_address} onChange={e => this.setState({ shipping_address: e.target.value })} className="form-control" placeholder="4663  Millbrook Road" />
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <label>Country</label>
                                                    <Dropdown
                                                        placeholder='Select Country'
                                                        fluid
                                                        search
                                                        selection
                                                        name="country"
                                                        value={shipping_country}
                                                        autoComplete="off"
                                                        options={settings.countries}
                                                        onChange={(e, { value }) => this.setState({ shipping_country: value})}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <label>State</label>
                                                    <Dropdown
                                                        placeholder='Select State'
                                                        fluid
                                                        search
                                                        selection
                                                        value={shipping_state}
                                                        name="state"
                                                        autoComplete="off"
                                                        options={allStates1}
                                                        onChange={(e, { value }) => this.setState({ shipping_state: value})}
                                                    />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <label>City</label>
                                                    <Dropdown
                                                        placeholder='Select City'
                                                        fluid
                                                        selection
                                                        search
                                                        value={shipping_city}
                                                        autoComplete="off"
                                                        options={allCities1}
                                                        onChange={(e, { value }) => this.setState({ shipping_city: value})}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <label>Zipcode</label>
                                                    <input type="text" value={shipping_zip} onChange={e => this.setState({ shipping_zip: e.target.value })} className="form-control" placeholder={39741} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#/" onClick={this.onProfileSave} className="pink-btn">Save</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <h6 className="yel">Security</h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label>Password</label>
                                                <button onClick={this.onPasswordChange} className="pink">change</button>
                                            </div>
                                            <input type="password" onChange={e => this.setState({ password: e.target.value })} className="form-control" placeholder="*****" />
                                        </div>
                                    </div>
                                </div>
                            </div></form>
                    </div></section>
            </div>

        );
    }
}

export default withRouter(Edit_Profile);