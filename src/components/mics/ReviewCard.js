import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default ({ review }) => {
    return (<div className="media">
        <img src="/images/review-1.png" className="img-fluid" alt="" />
        <div className="media-body">
            <div className="review-box">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>{ review.reviewer_name }</h5>
                        <h6>Posted: { review.created_at }</h6>
                    </div>
                    <div>

                        <Rater total={5} rating={review.rating} interactive={false} />
                        
                    </div>
                </div>
                <p>{ review.comment }</p>
            </div>
        </div>
    </div>)
}