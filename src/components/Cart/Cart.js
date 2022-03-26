import React from 'react';
import './Cart.css'
import CartName from './CartName';

const Cart = (props) => {

    const removeCart = () => {
        props.setCart([])
    }


    const choseOne = (carts) => {
        let ranNum = Math.random()
        let number = (Math.floor((ranNum * 10) / 2))
        // console.log(number)
        console.log(number)
        let one = (carts[number]).name
        alert('Your option:' + one)





    }

    return (
        <div className='cart'>
            <h1>Selected Item</h1>

            {
                props.cart.map(cartt => <CartName key={cartt.id} cart={cartt}></CartName>)
            }
            <h4>{props.cart.name} {props.cart.id}</h4>

            <button onClick={() => choseOne(props.cart)}>CHOSE 1 FOR ME</button><br /><br />
            <button onClick={removeCart}>CHOSE AGAIN</button>
        </div>
    );
};

export default Cart;