import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import http from '../../config/axios';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";


const Register = (props) => {
    const { handleSubmit, register, errors } = useForm();

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('+91');

    const verifyNumber = () => {
        // e.preventDefault();
        let number = code+phone;
        http.post('/auth/phone', {
            phone: number
        }).then(res => {
            props.history.push({
                pathname: '/register_2',
                state: { number: number}
            });
        }).catch(err => {
           // console.log(err.response.data.errors.phone[0]);
            toast.error(err.response.data.errors.phone[0] || 'Phone Number is required');
        });
    }
    const countryCodes = [+93,+92
        ,+355
        ,+213
        ,+683
        ,+376
        ,+244
        ,+263
        ,+672
        ,+267
        ,+54
        ,+374
        ,+297
        ,+247
        ,+61
        ,+672
        ,+43
        ,+994
        ,+241
        ,+973
        ,+880
        ,+245
        ,+267
        ,+375
        ,+32
        ,+501
        ,+229
        ,+440
        ,+975
        ,+591
        ,+387
        ,+267
        ,+55
        ,+283
        ,+673
        ,+359
        ,+226
        ,+257
        ,+855
        ,+237
        ,+1
        ,+238
        ,+344
        ,+236
        ,+235
        ,+64
        ,+56
        ,+86
        ,+53
        ,+8
        ,+61
        ,+57
        ,+269
        ,+242
        ,+243
        ,+682
       ,+506
        ,+225
        ,+385
        ,+53
        ,+5399
        ,+599
        ,+357
        ,+420
        ,+45
        ,+246
        ,+253
        ,+-766
        ,+1809,
        +1829
        ,+670
        ,+56
        ,+593
        ,+20
        ,+503
        ,+8812
        ,+8813
        ,+88213
        ,+240
        ,+291
        ,+372
        ,+251
        ,+500
        ,+298
        ,+679
        ,+358
        ,+33
        ,+596
        ,+594
        ,+689
        ,+241
        ,+220
        ,+995
        ,+49
        ,+233
        ,+350
        ,+881
        ,+8810
        ,+8811
        ,+8812
        ,+8813
        ,+8816
        ,+8817
        ,+8818
        ,+8819
        ,+8818,
        +8819
        ,+30
        ,+299
        ,+472
        ,+590
        ,+670
        ,+5399
        ,+502
        ,+245
        ,+224
        ,+592
        ,+509
        ,+504
        ,+852
        ,+36
        ,+8810,
        +8811
        ,+354
        ,+91
        ,+62
        ,+871
        ,+874
        ,+873
        ,+872
        ,+870        
        ,+800
        ,+808
        ,+98
        ,+964
        ,+353
        ,+8816,
        +8817
        ,+972
        ,+39
        ,+875
        ,+81
        ,+962
        ,+7
        ,+254
        ,+686
        ,+850
        ,+82
        ,+965
        ,+996
        ,+856
        ,+371
        ,+961
        ,+266
        ,+231
        ,+218
        ,+423
        ,+370
        ,+352
        ,+853
        ,+389
        ,+261
        ,+265
        ,+60
        ,+960
        ,+223
        ,+356
        ,+692
        ,+596
        ,+222
        ,+230
        ,+269
        ,+52
        ,+691
        ,+807
        ,+373
        ,+377
        ,+976
        ,+382
        ,+663
        ,+212
        ,+258
        ,+95
        ,+264
        ,+674
        ,+977
        ,+31
        ,+599
        ,+868
        ,+687
        ,+64
        ,+505
        ,+227
        ,+234
        ,+683
        ,+672
        ,+669
        ,+47
        ,+968
        ,+92
        ,+680
        ,+970
        ,+507
        ,+675
        ,+595
        ,+51
        ,+63
        ,+48
        ,+351
        ,+1787
        +1939
        ,+974
        ,+262
        ,+40
        ,+7
        ,+250
        ,+290
        ,+-868
        ,+-757
        ,+508
        ,+-783
        ,+685
        ,+378
        ,+239
        ,+966
        ,+221
        ,+381
        ,+248
        ,+232
        ,+65
        ,+421
        ,+386
        ,+677
        ,+252
        ,+27
        ,+34
        ,+94
        ,+249
        ,+597
        ,+268
        ,+46
        ,+41
        ,+963
        ,+886
        ,+992
        ,+255
        ,+66
        ,+88216
        ,+670
        ,+228
        ,+690
        ,+676
        ,+867
        ,+216
        ,+90
        ,+993
        ,+648
        ,+688
        ,+256
        ,+380
        ,+971
        ,+44
        ,+1
        ,+339
        ,+878
        ,+598
        ,+998
        ,+678
        ,+39,
        +379
        ,+58
        ,+84
        ,+808
        ,+681
        ,+967
        ,+260
        ,+255
        ,+263        ];
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
                            <img src="/images/pre-order.png" className="img-fluid" alt="" />
                            <h2>Registration Process </h2>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2 col-12 ">
                        <div className="login-main">
                            <div className="login-inner register-page">
                                <div className="right">
                                    <form onSubmit={handleSubmit(verifyNumber)}>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="mt-0">Enter your mobile number to receive a verification code.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 form-group d-flex justify-content-start">
                                                <select value={code} onChange={e => setCode(e.target.value)}>
                                                    {countryCodes.map(item => (
                                                        <option>+{item}</option>
                                                    ))}
                                                    {/* <option data-image={`${process.env.PUBLIC_URL}/images/map.png`}>+92</option>
                                                    <option data-image={`${process.env.PUBLIC_URL}/images/map.png`}>+95</option> */}
                                                </select>
                                                <input type="number" name="number" ref={register({ required: true })} required style={{marginLeft: "-20px"}} value={phone} onChange={e => { setPhone(e.target.value) }} className="form-control" placeholder="Enter mobile number" />
                                                {errors.number && <span className="text-danger">This field is required</span>}
                                            </div>
                                            
                                        </div>
                                        <button type="submit" className="pink-btn-nr form-control text-center"> next</button>
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

export default withRouter(Register);