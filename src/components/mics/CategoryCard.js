import React from 'react'
import { Link } from 'react-router-dom';

export default ({ category }) => {
    // const baseImage = category.files.filter(file => file.pivot && file.pivot.zone === 'base_image');
    let imagePath = `${process.env.PUBLIC_URL}/images/cat-1.png`;
    // if (baseImage.length > 0) {
    //     imagePath = baseImage.shift().path;
    // } else {
    //     imagePath = `${process.env.PUBLIC_URL}/images/cat-1.png`;
    // }
    return (<div className="col-6 col-lg-2 col-md-3 col-sm-4 d-flex w-100">
        <Link to={`products?category=${category.slug}`}>
            <div className="box">
                <img style={{height: "100px"}} src={!category.category_image >= 0 || category.category_image <= 100 ? category.category_image : imagePath} className="img-fluid" alt={category.name} />
                <h6>{category.name}</h6>
            </div>
        </Link>
    </div>)
}