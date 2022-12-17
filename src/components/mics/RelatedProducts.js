import React from 'react'
import OwlCarousel from "react-owl-carousel";
import HomeProductCard from './HomeProductCard';

export default ({ products }) => {
    return (<section className="related-products">
        <div className="container">
            
            <div className="row">
            
                <div className="col-12 text-center">
                    <h2>Related Products</h2>
                </div>
            
            </div>

            <div className="product-bottom" id="related-products">

                <OwlCarousel id="buy-slider-sfa" 
                    className="corona-thumb-slide slider-arrow owl-carousel" loop margin={10} autoplay={true} >

                    {products.map(product => <HomeProductCard home={false} product={product} key={product.id} />)}

                </OwlCarousel>

            </div>
        </div>
    </section>)
}