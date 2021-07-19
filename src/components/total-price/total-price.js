import React from "react";
import './total-price.sass';

const TotalPrice = ({totalPrice}) => {
    return (
        <div className='total-price'>
            <span className='total-price-wraper'>Price {totalPrice}$</span>
        </div>
    )
}
export default TotalPrice;