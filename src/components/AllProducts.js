import React, { useEffect, useState } from 'react';
import http from '../config/axios';
import CustomerReviews from './includes/CustomerReviews';
import ProductSuggestion from './includes/ProductSuggestion';
import ProductCard from './mics/ProductCard';
import ProductFilters from './mics/ProductFilters';
import { QueryToOBJ } from '../utils/query_to_object';
import ReactPaginate from 'react-paginate';
import { AuthContext } from '../context/AuthContext';

class AllProducts extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            country: '',
            states: '',
            page: 1
        }
    }
    
    loadProducts = () => {
        window.scrollTo(0,0);
        const location = this.props.location;
        const { page , country , states } = this.state;
        
        const params = QueryToOBJ(location.search);
        // console.log(params);
        if (params['location'] === "current_location") {
            params['country'] = this.context.country.toLowerCase();
            params['state'] = this.context.states.toLowerCase();
            params['page'] = page;
            http.get(`/products`, { params })
                .then((resp) => {
                    this.setState({ products: resp.data });
                });
        } else {
            params['page'] = page;
            http.get(`/products`, { params })
                .then((resp) => {
                    this.setState({ products: resp.data });
                });
        }

    }
    componentDidMount() {
        // this.getLocation();
        // console.log(this.context.country , this.context.states);
        this.setState({
            country: this.context.country,
            states: this.context.states
        });
        this.loadProducts();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.country !== this.state.country) {
            const data = this.loadProducts();
            if (prevState.states !== this.state.states) {
                this.loadProducts();
            }
        }
        if (prevState.page !== this.state.page) {
            this.loadProducts();
        }
        if (prevProps.location.search !== this.props.location.search) {
            const data = this.loadProducts();
            this.setState({
                country: this.context.country,
                states: this.context.states
            });
            // this.loadProducts();
        }
    }

    onPage = selectedPage => this.setState({ page: selectedPage.selected + 1 });

    render() {
        const { products } = this.state;
        return (
            <div>
                {/*inner-header-section start here*/}
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
                {/*all products start here*/}
                <section className="all-products">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 col-md-12">
                                <ProductFilters />
                            </div>
                            <div className="col-12 col-lg-9 col-md-12">
                                <div className="product-bottom">
                                    <div className="row">
                                        {products && products.data.map(product => <ProductCard product={product} key={product.id} />)}
                                    </div>
                                </div>
                                <div className="row">
                            <div className="col-12">
                                <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                    <ReactPaginate
                                        containerClassName="pagination justify-content-end"
                                        pageClassName="paginate_button page-item"
                                        pageLinkClassName="page-link"
                                        activeClassName="active"
                                        previousClassName="paginate_button page-item previous"
                                        previousLinkClassName="page-link"
                                        nextClassName="paginate_button page-item next"
                                        nextLinkClassName="page-link"
                                        activeLinkClassName="paginate_button page-item"
                                        pageCount={products && products.last_page}
                                        onPageChange={this.onPage}
                                    />
                                </div>
                            </div>
                        </div>
                            </div>

                        </div>
                        
                    </div>

                </section>
                {/*all products end here*/}

                {/*related products start here*/}
                {/* <RelatedProducts products={product.} /> */}
                {/*related products end here*/}

                <CustomerReviews />
                <ProductSuggestion />

            </div>
        );
    }
}

export default AllProducts;