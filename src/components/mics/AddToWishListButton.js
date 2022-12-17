import React, { useEffect, useState, useContext } from 'react'
import http from '../../config/axios'
import 'react-rater/lib/react-rater.css'
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

export default ({wishlistProducts, onAdd, onRemove, product, icon, title}) => {

    const defaultIcon = icon === undefined? 'fa fa-heart': icon;
    const defaultTitle = title === undefined? '': title;
    const [heartClass, setHeartClass] = useState(false);
    const auth = useContext(AuthContext)

    useEffect(() => {
        const index = wishlistProducts.findIndex(prod => prod.id === product.id)
        if(index < 0)
            return

        setHeartClass(true);

    }, [wishlistProducts])

    const toggleWishList = e => {
        if(!auth.isAuthenticated) {
            toast.warn('Please login before adding any product to wishlist.')
            return;
        }
        
        const index = wishlistProducts.findIndex(prod => prod.id === product.id)

        if(index < 0)
        {
            http.post('/wishlist', {product_id: product.id })
            .then(({data}) => {
                onAdd(product)
                setHeartClass(true)
            })
        }else{
            http.delete(`/account/wishlist/${product.id}`)
            .then(({data}) => {
                onRemove(product.id)
                setHeartClass(false)
            })
        }
    }
    return (<button className="wishlis" type="button" onClick={toggleWishList}>
        <i className={heartClass? defaultIcon: 'far fa-heart'} /> {defaultTitle}
    </button>)
}