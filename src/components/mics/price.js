import React from 'react';

const Price = ({option, price, qty}) => {
    let calculatedPrice = 0;
    let currency = price.formatted.replace(/[0-9\.]/g, '');
    if(option){
        calculatedPrice += parseFloat(option.price.amount)
    }

    return <h3>{currency} {Math.round((calculatedPrice) * qty )}</h3>
}

export default Price;