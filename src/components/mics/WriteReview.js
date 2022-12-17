import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { toast } from 'react-toastify';
import http from '../../config/axios';

export default ({productID}) => {

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const auth = useContext(AuthContext);

    const onRate = async function (e) {
        e.preventDefault();

        if(!auth.isAuthenticated){
            toast.warn("Please login in order to post your review.")
            window.$('.review-modal').modal('hide');
            return;
        }
        try {
            const { data } = await http.post(`/products/${productID}/reviews`, {
                rating,
                reviewer_name: auth.user.first_name + ' ' + auth.user.last_name,
                comment
            });

            toast.success(data.message);
        } catch (error) {
            toast.error("something went wrong.");
        }
        window.$('.review-modal').modal('hide');
    }

    return (<div className="modal fade review-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content common-modal">
                <div className="forget-pass ">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                    <div className="modal-body p-0">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <img src="/images/pre-order.png" className="img-fluid" alt="" />
                                        <h5>Add Review</h5>
                                    </div>
                                </div>
                                <form onSubmit={ onRate }>
                                    <div className="form-group">
                                        <label>Enter Name: </label>
                                        <input type="text" defaultValue={auth.isAuthenticated? auth.user.first_name + ' ' + auth.user.last_name: ''} className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Email:</label>
                                        <input type="email" defaultValue={auth.isAuthenticated? auth.user.email: ''} className="form-control" placeholder="Your Email" />
                                    </div>
                                    <label>Rating:</label>
                                    <Rater total={5} rating={rating} onRate={ ({rating}) => setRating(rating) } />

                                    <div className="form-group">
                                        <label>Write Your Review</label>
                                        <textarea className="form-control" value={comment} onChange={e => setComment(e.target.value)} />
                                    </div>
                                    <button type="submit" className="form-control pink-btn-nr" aria-label="Close">Add Review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}