import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import http from '../config/axios';
import CategoryCard from './mics/CategoryCard';

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        loadCategories();
    }, []);
    
    const loadCategories = async () => {
        try {
            const { data } = await http.get(`/categories`);
            setCategories(data);
        } catch (error) {
            toast.warn(error.response);
        }
    }

    return (
        <div>
            {/*inner-header-section start here*/}
            <section className="inner-header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <h1>All Category</h1>
                            <h4 className="pink">Discover the unique village items!</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/*inner-header-section end here*/}
            {/*category start here*/}
            <section className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Shop By Category</h3>
                        </div>
                    </div>
                    <div className="row">
                        {categories.map(category => <CategoryCard category={category} key={category.id} />)}
                    </div>
                    {/* <div className="pagination">
                        <ul>
                            <li className="active"><a href="#/">1</a>
                            </li>
                            <li><a href="#/">2</a>
                            </li>
                            <li><a href="#/">3</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </section>
           
        </div>
    );
}

export default Category;