import React from 'react'
import { NavLink , Link , Redirect } from 'react-router-dom';

const HomeProductCard = ({ product, home }) => {

    const baseImage = product.files.filter(file => file.pivot && file.pivot.zone === 'base_image')
    let imagePath = '';
    if(baseImage.length > 0){
        imagePath = baseImage.shift().path;
    }else{
        imagePath = `${process.env.PUBLIC_URL}/images/product-1.png`;
    }
   

    const isHome = home === undefined ? true: false;
    return (
    <div className={isHome ? "col-12 col-lg-4 col-md-6" : "item"}>
        <div className="box wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
            <NavLink to={{ pathname: `/products/${product.slug}?updated=true` }}>
                <div className="box-top">
                    <img src={imagePath} className="img-fluid" alt={product.name} />
                </div>
                <div className="box-middle">
                    <h4>{product.name}</h4>

                    {isHome ? null :
                        <ul className="stars">
                            <li className="active"><i className="fa fa-star" /></li>
                            <li className="active"><i className="fa fa-star" /></li>
                            <li className="active"><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                        </ul>}

                    <div dangerouslySetInnerHTML={{
                        __html: product.short_description
                    }}>
                    </div>
                    <h3 className="yel">{product.price.formatted}</h3>
                </div>
                <div className="cart-btn">
                    <img src={`${process.env.PUBLIC_URL}/images/product-cart.png`} className="img-fluid" alt="Add to card" />
                </div>
            </NavLink>
        </div>
    </div>)
}

export default HomeProductCard;