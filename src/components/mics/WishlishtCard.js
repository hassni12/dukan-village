import React from 'react'
import AddToWishListButton from './AddToWishListButton'


export default ({ onAdd, onRemove, product, wishlistProducts }) => {
    return (<div className="col-12 col-md-6 d-flex w-100">
        <div className="wishlist-box">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12 d-flex w-100">
                    <div className="left">
                        <img src="images/product-1.png" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-12 d-flex w-100">
                    <div className="right">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5>{product.name}</h5>
                            {/* <button type="button">
                                <i className="far fa-trash-alt" />
                            </button> */}

                            <AddToWishListButton
                                onAdd={onAdd}
                                onRemove={onRemove}
                                wishlistProducts={wishlistProducts}
                                product={product}
                                icon={"far fa-trash-alt"}
                            />

                        </div>
                        <div dangerouslySetInnerHTML={{
                            __html: product ? product.description : null
                        }}></div>
                        <h6 className="pink">{product.price.formatted}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}