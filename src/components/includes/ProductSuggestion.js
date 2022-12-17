import React, { useState } from 'react';
import http from '../../config/axios';
import { toast } from 'react-toastify';

const ProductSuggestion = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');

    const onProductSuggest = async() => {
        try {
            const { data } = await http.post('/product_suggestion',{
                name,
                email,
                message
            });
            toast.success('Thank You for you Suggestion.');
        } catch (error) {
            toast.error('Enter correct details.');
        }
    }
    return (
        <section className="product-sug-main ">
            <div className="container-fluid position-relative">
                <img src="images/sug-1.png" className="img-fluid sug-1" alt="" />
                <div className="product-sug">
                    <div className="row ">
                        <div className="col-lg-6 col-12">
                            <div className="left">
                                <img src="images/su-2.png" className="img-1 wow fadeInUp "data-wow-duration=".9s" data-wow-delay=".9s" alt="" />
                                <img src="images/su-3.png" className="img-2 wow fadeInUp "data-wow-duration="1.3s" data-wow-delay="1.3s" alt="" />
                                <img src="images/su-4.png" className="img-3 wow fadeInUp "data-wow-duration="1.7s" data-wow-delay="1.7s" alt="" />
                                <img src="images/su-5.png" className="img-4 wow fadeInUp "data-wow-duration="2s" data-wow-delay="2s" alt="" />
                                <img src="images/su-1.png" className="img-5  wow fadeInUp "data-wow-duration=".5s" data-wow-delay=".5s" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="left-main">
                                <h2 className="wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".7s">Product <br /> Suggestions</h2>
                                <div className="left-inner">
                                    <form>
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control wow fadeInUp" data-wow-duration=".9s" data-wow-delay=".9s" placeholder="name" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control wow fadeInUp" data-wow-duration="1.1s" data-wow-delay="1.1s" placeholder="Email" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <textarea className="form-control wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.3s" value={message} onChange={e => setMessage(e.target.value)} placeholder="We listen to our customers. Can't find product you are looking for? Tell us what you want. We will make it happen for you!" />
                                            </div>
                                            <div className="col-12 form-group">
                                                <button  onClick={onProductSuggest} className="yel-btn wow fadeInUp" data-wow-duration="1.4s" data-wow-delay="1.4s" type="button">submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductSuggestion;