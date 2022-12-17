import React from 'react'
import { NavLink } from 'react-router-dom'
import Rater from 'react-rater';


export default ({ product }) => {

    const baseImage = product.files.filter(file => file.pivot && file.pivot.zone === 'base_image')
    let imagePath;
    if (baseImage.length > 0) {
        imagePath = baseImage.shift().path;
    } else {
        imagePath = `${process.env.PUBLIC_URL}/images/product-1.png`;
    }


    return (<div className="col-12 col-xl-4 col-md-6">
        <div className="box disable-box">
            <NavLink to={{ pathname: `/products/${product.slug}?updated=true` }}>
                <div className="box-top">
                    <img style={{ height: "180px" }} src={imagePath} className="img-fluid" alt="" />
                </div>
                <div className="box-middle">
                    <h4>{product.name}</h4>
                    <Rater total={5} rating={product.average_ratings} interactive={false} />
                    <div dangerouslySetInnerHTML={{
                        __html: product.short_description
                    }}></div>
                    <h3 className="yel">{product.selling_price.formatted}</h3>
                </div>
                <div className="cart-btn">
                    <img src={`${process.env.PUBLIC_URL}/images/product-cart.png`} className="img-fluid" alt="Add to cart" />
                </div>
            </NavLink>
        </div>
    </div>)
}