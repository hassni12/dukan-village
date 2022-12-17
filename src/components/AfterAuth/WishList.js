import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import WishlishtCard from '../mics/WishlishtCard';

const WishList = () => {

    const context = useContext(AuthContext);

    const { wishlistProducts, onAddToWishlist, onRemoveFromWishlist } = context

    return (
        <div>
            <section className="inner-header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <h1>Wishlist</h1>
                            <h4 className="pink">Discover the unique village items!</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/*inner-header-section end here*/}
            {/*wishlist start here*/}
            <section className="wishlist">
                <div className="container">
                    <div className="row">
                        
                        {wishlistProducts.length > 0 ? 
                            wishlistProducts.map(product => <WishlishtCard 
                                onAdd={onAddToWishlist} 
                                onRemove={onRemoveFromWishlist} 
                                wishlistProducts={wishlistProducts}
                                product={product}
                                key={product.id}
                                />
                        ): <p>No products found in you wishlist.</p>}

                    </div>
                </div>
            </section>
        </div>
    );
}

export default WishList;