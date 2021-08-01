import React from "react";
import './total-price.sass';
import PropTypes from "prop-types";

const TotalPrice = ({totalPrice}) => {
    console.log(totalPrice)

    TotalPrice.propTypes = {
        totalPrice: PropTypes.number.isRequired
    }
    return (
        <div className='total-price'>
            <span className='total-price-wraper'>Price {totalPrice}$</span>
        </div>
    )
}
export default TotalPrice;