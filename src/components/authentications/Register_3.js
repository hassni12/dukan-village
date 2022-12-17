import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import http from '../../config/axios';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const Register_3 = (props) => {
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassCon] = useState('');
    const [phone , setPhone] = useState('');
    const [type, setType] = useState('password');
    const [type1, setType1] = useState('password');
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = async (formData) => {
        if(password !== password_confirmation){
            toast.error("Password does not match.");
            return;
        }
        try {
            const { data } = await http.post('/auth/register', {
                first_name,
                email,
                password,
                password_confirmation,
                phone: phone
            });
            props.history.push({
                pathname: '/login',
            });

        } catch (error) {
            error.response.data.errors && Object.values(error.response.data.errors).map((error, index) => {
                toast.error(error[index]);
            });
            
        }
    }
    useEffect(() => {
        setPhone(props.location.state && props.location.state.number);
    },[]);
    return (
        <div>
            {/*inner-header-section start here*/}
            <section className="inner-header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <h1>Registration </h1>
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
                        <div className="col-12 text-center">
                            <img src="images/pre-order.png" className="img-fluid" alt="" />
                            <h2>Registration Process </h2>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2 col-12 ">
                        <div className="login-main register-3 ">
                            <div className="login-inner">
                                <div className="right">
                                    <form onSubmit={ handleSubmit(onSubmit) }>
                                        <p className="text-center"><i className="fa fa-check-circle d-block" />Phone Number Verified </p>
                                        <div className="row">
                                            <div className="col-12">
                                                <label htmlFor>Full Name:</label>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input type="text" name="name" ref={register({ required: true })} value={first_name} onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="Enter your Name " />
                                            </div>
                                            {errors.name && <span className="text-danger">This field is required</span>}
                                            <div className="col-12">
                                                <label htmlFor>Email:</label>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input type="text" name="email" ref={register({ required: 'This field is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "invalid email address"
                                                }
                                             })} value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email Address  " />
                                            </div>
                                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                            <div className="col-12">
                                                <label htmlFor>Password:</label>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input type={type} name="password" ref={register({ required: 'This field is required',
                                                 pattern: {
                                                    value: /.{6,32}$/i,
                                                    message: "Password must be atleast 6 character long"
                                                }
                                              })} value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
                                                <button onClick={() => { type === 'password' ? setType('text') : setType('password') }} className="icon" type="button"><i className="fa fa-eye" /></button>
                                            </div>
                                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                            <div className="col-12">
                                                <label htmlFor>Re-Enter Password:</label>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input type={type1} name="cPassword"  ref={register({ required: true })} value={password_confirmation} onChange={e => setPassCon(e.target.value)} className="form-control" placeholder="Re-Enter Password" />
                                                <button onClick={() => { type1 === 'password' ? setType1('text') : setType1('password') }} className="icon" type="button"><i className="fa fa-eye" /></button>
                                            </div>
                                            {errors.cPassword && <span className="text-danger">This field is required</span>}
                                            <div className="col-12 form-group">
                                                <button type="submit" className="pink-btn-nr form-control text-center"> SIGN UP</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="text-center">Already have an account? <NavLink to="/login" className="yel">SIGN IN</NavLink> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(Register_3);