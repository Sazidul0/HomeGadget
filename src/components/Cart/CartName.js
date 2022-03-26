import React from 'react';
import './CartName.css'

const CartName = (props) => {

    return (
        <div className='cart-image'>
            <img src={props.cart.img} alt="" />
            <h4>{props.cart.name}</h4>
        </div>
    );
};

export default CartName;