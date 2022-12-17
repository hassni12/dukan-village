import React from 'react';
import OwlCarousel from "react-owl-carousel";
import { NavLink } from 'react-router-dom';
import http from '../../config/axios';
import ProductImages from '../mics/ProductImages'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import HomeProductCard from '../mics/HomeProductCard';
import WriteReview from '../mics/WriteReview';
import ReviewCard from '../mics/ReviewCard';
import AddToWishListButton from '../mics/AddToWishListButton';
import { AuthContext } from '../../context/AuthContext'
import ProductOption from '../mics/ProductOption';
import { toast } from 'react-toastify';
import * as moment from 'moment';

let special_remaining = 0;

let optionLabels = [];
let maxOptionIndex = [];

// let item = 0;
class ProductDetail extends React.Component {

    static contextType = AuthContext;

    

    increseQty = () => {
        const qty = this.state.qty + 1;
        this.setState({ qty });
    }

    decreseQty = () => {
        if (this.state.qty === 0) return;
        if (this.state.qty === 1) return;

        const qty = this.state.qty - 1;

        this.setState({ qty });
    }

    constructor(props) {
        super(props);

        this.state = {
            product: null,
            reviews: null,
            relatedProducts: null,
            qty: 1,
            product_id: 0,
            option: '',
            date: '',
            item: 0,
            responsive:{
                0: {
                    items: 1,
                },
                575: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                },
            }
        }
    }

    onPageLoad = async () => {
        window.scrollTo(0,0);
        const { data } = await http.get(`/products/${this.props.match.params.slug}?updated=true`);

        optionLabels = data.product.options.map(o => o.values.map(v => parseInt(v.label)))

        maxOptionIndex = optionLabels.map( arr => arr.indexOf(Math.max(...arr)))

        this.setState({
            product: data.product,
            reviews: data.reviews,
            relatedProducts: data.relatedProducts,
            product_id: data.product.id
        });

        optionLabels.forEach((option, optionIndex) => this.receiveChildValue(optionIndex, maxOptionIndex[optionIndex]))
    }

    componentDidMount() {
        this.onPageLoad();
    }

    componentDidUpdate(prevProps , prevState){
        if(prevProps.match.params.slug !== this.props.match.params.slug){
            this.onPageLoad();
        }
    }

    onPreOrder = () => {
        const { product} = this.state;
        var format = 'hh:mm:ss a';
        let times = moment().add(30, 'minutes').format("hh:mm:ss a");
        //var time = moment(times, format),
            // beforeTime = moment('07:00:00 am', format),
            // afterTime = moment('05:00:00 pm', format);
            // beforeTime = moment('0'+this.context.settings.pre_order_min_time+':00:00 am', format),
            // afterTime = moment('0'+this.context.settings.pre_order_max_time+':40:00 pm', format);
            var preorderDate = moment(product.detail.preorder_date);
            var currentDate = moment();
            var remaining_days = preorderDate.diff(currentDate, 'days');
           
           

        if (remaining_days>0) {
           
            this.setState({
                date: moment(product.detail.preorder_date).format('DD/MM/YYYY')
            });

        } else {
            if(product.detail.preorder_type=="none"){
                this.setState({
                    date: moment(product.detail.preorder_date).format('DD/MM/YYYY')
                });
            }else if(product.detail.preorder_type=="week"){
                this.setState({
                    date: moment(product.detail.preorder_date).add(7, 'days').format('DD/MM/YYYY')
                });
            }else{
                this.setState({
                    date: moment(product.detail.preorder_date).add(30, 'days').format('DD/MM/YYYY')
                });
            }
            
        }
    }
    addToCart = async () => {
        const { product, qty, option, date } = this.state;
        if (qty < 1) {
            toast.warn('Please add quantity.')
            window.$('.pre-order-modal').modal('hide');
            return;
        }
        if(!option){ 
            toast.warn('Please select option.');
            window.$('.pre-order-modal').modal('hide');
            return;
        }
        let gram = parseInt(option.label.match(/(\d+)/)) * parseInt(qty);
        let kg = gram / 1000;

        this.context.onCartItemAdded({
            product: product,
            option,
            qty,
            kg: kg,
            preorder_date:date,
            delivery_time: {
                date: date || 'N/A',
                // min_time: '07',
                // max_time: '09'
                min_time: this.context.settings.pre_order_min_time,
                max_time: this.context.settings.pre_order_max_time

            }
        });
        if (product.detail.special === "yes") {
            this.setState({
                item: this.state.item + 1
            });
        }

        toast.success("Item Added in your Bucket.");
    }
    receiveChildValue = (optionIndex, ItemIndex) => {
        this.setState({
            option: this.state.product.options[optionIndex].values[ItemIndex]
        });
    }

    render() {
        const { wishlistProducts, onAddToWishlist, onRemoveFromWishlist, settings } = this.context;
        const { product, reviews, relatedProducts, item , option } = this.state;
        special_remaining = settings.pre_order_total - item;

        return (product ?
            <div>
                <section className="inner-header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12">
                                <h1>All Products</h1>
                                <h4 className="pink">Discover the unique village items!</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/*inner-header-section end here*/}
                {/*product-detail start here*/}
                <section className="product-detail-main pad-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="breadcrumb bg-white">
                                    <NavLink className="breadcrumb-item" to="/products">All Products</NavLink>
                                    <span className="breadcrumb-item active">Product details</span>
                                </nav>
                            </div>
                        </div>
                        <div className="product-detail">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    {product ? <ProductImages files={product.files} /> : null}
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <div className="top">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h4>{product.name}</h4>
                                                    <h6>Category: {product.categories && product.categories.map( (category , index) => (
                                                        <span key={index} className="pink">{category.name}</span>
                                                    ))} </h6>
                                                    <Rater total={5} rating={product.average_ratings} interactive={false} />
                                                    <p className="reviews-count">{reviews.total} reviews</p>
                                                </div>
                                                <div>
                                                    <div className="own-by">
                                                        <p>Owned by:</p>
                                                        {product.detail && product.detail.provider === "self" ? <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="img-fluid" alt="" /> : <h6>Another Service Provider</h6>}
                                                        {/* <img src="/images/logo.png" className="img-fluid" alt="" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="middle">
                                            <div dangerouslySetInnerHTML={{
                                                __html: product ? product.description : null
                                            }}></div>
                                            <h3>{option ? option.price ? option.price.formatted : '$0' : "$0"}</h3>
                                            {/* <h3>{product ? product.selling_price ? product.selling_price.formatted : '$0' : "$0"}</h3> */}
                                            <div className="row">
                                                <div className="col-sm-6 col-12">

                                                    {product.options.map((option, index) => <ProductOption maxOptionIndex={maxOptionIndex} optionIndex={index} fromChildToParentCallback={this.receiveChildValue} key={option.id} option={option} />)}

                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className="quantity">
                                                        <label>Quantity:</label>
                                                        <button className="minus" onClick={this.increseQty}>
                                                            <i className="fa fa-plus-circle" />
                                                        </button>

                                                        <input type="number" value={this.state.qty} readOnly />

                                                        <button className="plus" onClick={this.decreseQty}>
                                                            <i className="fa fa-minus-circle" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="row">
                                                    <div className="col-12 col-sm-6">
                                                    {product.in_stock ? product.detail && product.detail.special === 'yes' ?
                                                            <div className="">
                                                                <button type="button" onClick={this.onPreOrder} className="pink-btn pre-order" data-toggle="modal" data-target=".pre-order-modal">Pre Order Now</button>
                                                                <p>Remaining Items Today: {special_remaining}</p> </div> :

                                                            <button onClick={this.addToCart} type="button" className="pink-btn shopping">
                                                                <i className="fas fa-shopping-basket" /> Add to cart
                                                        </button> :
                                                        
                                                        <button type="button" className="pink-btn shopping">
                                                        <i className="fas fa-shopping-basket" /> out of stock
                                                        </button>
                                                        }

                                                        {/* {product.detail && product.detail.special === 'yes' ?
                                                            <div className="">
                                                                <button type="button" onClick={this.onPreOrder} className="pink-btn pre-order" data-toggle="modal" data-target=".pre-order-modal">Pre Order Now</button>
                                                                <p>Remaining Items Today: {special_remaining}</p> </div> :

                                                            <button onClick={this.addToCart} type="button" className="pink-btn shopping">
                                                                <i className="fas fa-shopping-basket" /> Add to cart
                                                        </button>
                                                        } */}

                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <AddToWishListButton
                                                            onAdd={onAddToWishlist}
                                                            onRemove={onRemoveFromWishlist}
                                                            wishlistProducts={wishlistProducts}
                                                            product={product}
                                                            title="Add to Wishlist"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*product-detail end here*/}
                {/*related products start here*/}
                <section className="related-products detailed">
                    <div className="container">
                        {relatedProducts.length > 0 ? <><div className="row">
                            <div className="col-12 text-center">
                                <h2>Related Products</h2>
                            </div>
                        </div>
                            <div className="product-bottom" id="related-detailed-products">
                                {relatedProducts ?
                                    <OwlCarousel items={4} id="buy-slider-sfa" className="corona-thumb-slide slider-arrow owl-carousel" loop
                                        margin={10}
                                        autoplay={true}
                                        responsive={this.state.responsive}
                                        >
                                        {relatedProducts.map(product => <HomeProductCard key={product.id} home={false} product={product} />)}
                                    </OwlCarousel> : null}
                            </div>
                        </> : null}
                    </div>
                </section>
                {/*related products end here*/}
                {/*reviews start here*/}
                <section className="reviews">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-sm-flex justify-content-between">
                                <h3>Reviews <span>({reviews.total})</span></h3>
                                <a href="#/" className="pink-btn-nr" data-toggle="modal" data-target=".review-modal">Write a Review</a>
                                <WriteReview productID={product.id} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {reviews.data.map(review => <ReviewCard key={review.id} review={review} />)}
                            </div>
                        </div>
                    </div>
                </section>
                {/*reviews end here*/}
                {/* pre-order modal  */}
                <div className="modal fade pre-order-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content common-modal">
                            <div className="forget-pass ">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div className="modal-body p-0">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <div className="top">
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <img src="/images/pre-order.png" className="img-fluid" alt="" />
                                                        <h5 className="pink">Pre-Order Now</h5>
                                                        <p>Your Item will be delivered on</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <form>
                                                    <label>Date:</label>
                                                    <span>{this.state.date}</span>
                                                    <p></p>
                                                    <p></p>
                                                    {/* <input type="text" id="datepicker-1" value={this.state.date} disabled={true} className="" placeholder="DD / MM / YY" /> */}
                                                    {/* <label>Time:</label>
                                                    <span>07:00 to 09:00</span> */}
                                                    {/* <input type="text" className="form-control" id="timepicker-1" value={"07:00 to 09:00"} disabled={true} placeholder="00:00 AM" /> */}
                                                    <button type="button" onClick={this.addToCart} className="form-control pink-btn-nr" data-dismiss="modal" aria-label="Close">Add to Cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*pre-order modal end here*/}
                {/* review modal start  */}

            </div>
            : null);
    }
}

export default ProductDetail;