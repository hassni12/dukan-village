import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import http from '../../config/axios';
import { toast } from 'react-toastify';


const Register_2 = (props) => {
    const [code, setCode] = useState('');
    const [seconds, setSeconds] = useState(30);
    const [resend, setResend] = useState(false);
    const [number, setNumber] = useState(0);
    const [cnt, setCnt] = useState(0);
    let counter = 30;

    const verifyCode = () => {
        http.post('/auth/phone-verify', {
            code
        }).then(res => {
            props.history.push({
                pathname: '/register_3',
                state: { number: number}
            });
        }).catch(err => {
            toast.error("Invalid Code");
            props.history.push({
                pathname: '/register_2',
                
            });
            // toast.error(err.response);
        });
    }
    useEffect(() => {
        setNumber(props.location.state && props.location.state.number);
        // console.log(props);
        // if(props.location.state === undefined){
        //     props.history.push({
        //         pathname: '/register',
        //     });
        // }
        TimeCounter();
    }, []);

    const TimeCounter = () => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            counter--;
            if (counter === 0) {
                setResend(true);
                clearInterval(interval);
            }
        }, 1000);
    }

    const onResendCode = async () => {
        if (cnt < 2) {
            try {
                const { data } = await http.post('/auth/phone-resend-code', {
                    phone: number
                });
                setSeconds(30);
                setResend(false);
                TimeCounter();
                setCnt(cnt + 1);
                toast.success("Enter the code that was sent to your number");
            } catch (error) {
                toast.error("Enter Valid Mobile Number");
                props.history.push({
                    pathname: '/register',
                });
            }
        } else {
            toast.warn("You are not allowed to send to many code!");
            props.history.push({
                pathname: '/register',
            });
        }
    }

    return (
        <div>
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
                        <div className="login-main">
                            <div className="login-inner register-2">
                                <div className="right">
                                    {/* <form> */}
                                    <p className="text-center">Enter 6 digit number that sent to {number}</p>
                                    <div className="col-12 form-group">
                                        <input type="number" value={code} onChange={e => { setCode(e.target.value) }} className="form-control" placeholder="Enter your code" />
                                    </div>
                                    <p className="text-center">Can't receive SMS?  <a onClick={onResendCode} className="yel">{resend === true ? "Resend Code" : ""}</a> <span className="pink">{seconds} sec</span></p>
                                    <button type="button" onClick={verifyCode} className="pink-btn-nr form-control text-center"> continue</button>
                                    {/* </form> */}
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

export default withRouter(Register_2);