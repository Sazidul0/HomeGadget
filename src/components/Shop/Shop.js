import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCard = (selectedProduct) => {
        let newCart = [...cart, selectedProduct];

        setCart(newCart);
        // console.log(newCart)
    }

    // Remove cart Item
    const removeCart = () => {
        console.log('clicked')

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} addToCard={addToCard} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart setCart={setCart} cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;