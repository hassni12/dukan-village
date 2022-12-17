import React, { Component, createContext } from 'react';
import http from '../config/axios';
import Axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

class AuthContextProvider extends Component {

    state = {
        user: this.props.auth.user,
        isAuthenticated: this.props.auth.isAuthenticated,
        wishlistProducts: [],
        settings: {},
        mycart: null,
        cart: [],
        country: '',
        states: '',
    }

    onGetCart = async () => {
        const { data } = await http.get('/cart');
        this.setState({ mycart: data.cart });
    }

    componentDidMount() {
        this.loadCartItems();
        this.loadSettings();
        this.loadWishlistProducts();
        this.getLocation();
    }

     

    loadWishlistProducts() {
        http.get('account/wishlist')
            .then(({ data }) => {
                this.setState({ wishlistProducts: data.data })
            })
    }
    getLocation = () => {
        if ("geolocation" in navigator) {
           // console.log("Available");
        } else {
          //  console.log("Not Available");
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((cords) => {
                // console.log(cords)
                let latitude = cords.coords.latitude
                let longitude = cords.coords.longitude
                Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4`)
                    .then((response) => {
                        
                        let Address = response.data.results[0].formatted_address
                        let city = ''
                        let country = ''
                        let state = ''

                        for (var i = 0; i < response.data.results[0].address_components.length; i++) {
                            for (var b = 0; b < response.data.results[0].address_components[i].types.length; b++) {
                                switch (response.data.results[0].address_components[i].types[b]) {
                                    case 'locality':
                                        city = response.data.results[0].address_components[i].long_name;
                                        // console.log("city : " + city)
                                        break;
                                    case 'country':
                                        country = response.data.results[0].address_components[i].long_name;
                                        this.setState({ country });
                                        // console.log("country : " + country)
                                        break;

                                    case 'administrative_area_level_1':
                                        state = response.data.results[0].address_components[i].long_name;
                                        this.setState({ states: state });
                                        // console.log("state : " + state);

                                        break;
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        // console.log(error);
                    })
            });
        } else {
            toast.error("Geolocation is not supported by this browser.");
        }
    }

    loadSettings() {
        http.get('settings')
            .then(({ data }) => {
                this.setState({ settings: data })
            })
    }

    loadCartItems() {
        try {
            this.setState({
                cart: JSON.parse(localStorage.getItem('cart')) || []
            })
        } catch (error) {
            this.setState({
                cart: []
            })
        }
    }

    onCartItemAdded = (payload) => {

        const cart = this.state.cart;

        const productIndex = cart.findIndex(item => item.product.id === payload.product.id);

        if (productIndex < 0)
            cart.push(payload);
        else {
            cart[productIndex] = payload
        }

        window.localStorage.setItem('cart', JSON.stringify(cart));

        this.setState({ cart });
    }

    onCartItemRemoved = (productId) => {
        const cart = this.state.cart.filter(item => item.product.id !== productId);
        this.setState({ cart });
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    onClearCartItems = () => {
        this.setState({ cart: [] });
        window.localStorage.removeItem('cart');
    }

    LoggedIn = (user, isAuthenticated) => this.setState({ user, isAuthenticated })

    LoggedOut = () => this.setState({ user: undefined, isAuthenticated: false });

    AddToWishList = (product) => {
        const products = this.state.wishlistProducts;
        products.push(product);
        this.setState({ wishlistProducts: products })
    }

    RemoveFromWishList = (id) => {
        const products = this.state.wishlistProducts.filter(product => product.id !== id);

        this.setState({ wishlistProducts: products })
    };

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                onLoggedIn: this.LoggedIn,
                onLoggedOut: this.LoggedOut,
                loadWishlistProducts: this.loadWishlistProducts,
                onAddToWishlist: this.AddToWishList,
                onRemoveFromWishlist: this.RemoveFromWishList,
                onGetCart: this.onGetCart,
                onCartItemAdded: this.onCartItemAdded,
                onCartItemQtyUpdated: this.onCartItemQtyUpdated,
                onCartItemRemoved: this.onCartItemRemoved,
                onRecentProducts: this.loadRecentProducts,
                onClearCartItems: this.onClearCartItems
            }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }

};

export default AuthContextProvider;