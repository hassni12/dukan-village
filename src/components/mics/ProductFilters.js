import React, { useState, useEffect } from 'react'
import { QueryToOBJ, OBJtoQuery} from '../../utils/query_to_object';
import { useLocation, useHistory } from 'react-router-dom'
import http from '../../config/axios';

export default () => {

    const history = useHistory();
    const location = useLocation();
    const defaultFilters = QueryToOBJ(location.search);

    const [fromPrice , setFromPrice] = useState(defaultFilters.fromPrice? defaultFilters.fromPrice : '');
    const [toPrice , setToPrice] = useState(defaultFilters.toPrice? defaultFilters.toPrice : '');
    const [categories, setCategories] = useState([]);
    const [shopBy , setShopBy] = useState(defaultFilters.shopBy ? defaultFilters.shopBy : 'current_location');
    const [sort , setSort] = useState(defaultFilters.sort? defaultFilters.sort : '');
    const [query , setQuery] = useState(defaultFilters.query? defaultFilters.query : '');
    // const [selectedCategories, setSelectedCategories] = useState([]);
    const selectedCategories = defaultFilters.category? defaultFilters.category.split(',') : [];
    // const selectedLocation = defaultFilters.shopBy? defaultFilters.shopBy : '';


    const onCategoryChanged = e => {
        const value = e.target.value;
        
        if(selectedCategories.includes(value)){
            const idx = selectedCategories.indexOf(value);
            selectedCategories.splice(idx, 1);
        }else
            selectedCategories.push(value);

        prepareQueryParams()
       
    }

    const prepareQueryParams = () => {
        const filter = {
            category: selectedCategories.join(','),
            fromPrice: fromPrice,
            toPrice: toPrice,
            location: shopBy,
            sort: sort,
            query: query
        };

        history.push({
            pathname: '/products',
            search: OBJtoQuery(filter)
        })
    }

    useEffect(() => {
        http.get('/categories')
            .then(({ data }) => {
                setCategories(data)
            });
    }, []);

    useEffect(prepareQueryParams, [sort, shopBy])

    return (<div className="left">
        <form action="">
            <div className="row">
                <div className="col-12 form-group">
                    <label htmlFor="Shop By ">Shop By</label>
                    <select value={shopBy} onChange={e => setShopBy(e.target.value)} className="form-control">
                        <option value="current_location">Current Location</option>
                        <option value="localArea">Local Area</option>
                        <option value="allOverIndia">All Over India</option>
                        <option value="allOverWorld">All Over World</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12 form-group">
                    <label htmlFor="Categories">Categories</label>
                    {categories.map(category => (<label className="login-check" key={category.id}>
                        {category.name}
                        <input type="checkbox" checked={selectedCategories.includes(category.slug)} value={category.slug} onChange={onCategoryChanged} />
                        <span className="checkmark" />
                    </label>))}

                </div>
            </div>
            <div className="row">
                <div className="col-12 form-group">
                    <label htmlFor="Categories">Price Range</label>
                    <div className="row">
                        <div className="col-6">
                        <input id="min" style={{width: "110px" , borderWidth: '2px'}} value={fromPrice} onBlur={prepareQueryParams} onChange={e => setFromPrice(e.target.value)} type="number" placeholder="Min Price" />
                            {/* <select className="form-control">
                                <option value>Min</option>
                                <option value>Min</option>
                                <option value>Min</option>
                            </select> */}
                        </div>
                        <div className="col-6">
                        <input id="max" style={{width: "110px"}} value={toPrice} onBlur={prepareQueryParams} onChange={e => setToPrice(e.target.value)} type="number" placeholder="Max Price" />
                            {/* <select className="form-control">
                                <option value>Max</option>
                                <option value>Max</option>
                                <option value>Max</option>
                            </select> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 form-group">
                    <label htmlFor="Shop By ">Sort by</label>
                    <select value={sort} onChange={e => setSort(e.target.value)} className="form-control">
                        <option value="latest">Latest</option>
                        <option value="relevance">Relevance</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-12">
                    <div  className="right">
                    <h2>Hand Made Pickles</h2>
                        <h2>Hand <span style={{color: 'white'}} className="text-1">Made </span><span className="text-2">Pickles</span></h2>
                        <h6>On Your First Order</h6>
                        <h4>Use Order: Welcome</h4>
                        <img src="images/res-2.png" className="img-fluid" alt="bottle" />
                    </div>
                </div>
            </div> */}
        </form>
    </div>
    );
}