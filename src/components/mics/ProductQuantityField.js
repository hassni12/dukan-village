import React, { useState } from 'react'

export default () => {

    const [qty, setQty] = useState(0);

    const changeQty = (value) => {
       // console.log(value);
        // if(value < 0) return;
        // setQty(value);
    }

    return (<div className="quantity">
        <label>Quantity:</label>
        <button className="plus" onClick={setQty(qty + 1)}>
            <i className="fa fa-minus-circle" />
        </button>

        <input type="number" value={qty} onChange={changeQty()}/>

        <button className="minus" onClick={setQty(qty - 1)}>
            <i className="fa fa-plus-circle" />
        </button>
    </div>)
}