import React from 'react';
import './Product.css'

const Product = (props) => {
    const { addToCard } = props;


    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: ${price}</h4>
            <button onClick={() => addToCard(props.product)}>
                <p>ADD TO CARD</p>
            </button>
        </div>
    );
};

export default Product;