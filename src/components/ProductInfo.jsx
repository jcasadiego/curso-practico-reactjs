import React from 'react';
import addCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductInfo = () => {
    return(
        <>
            <img src={bike} alt="bike" />
            <div classname="ProductInfo">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button classname="primary-button add-to-cart-button">
                    <img src={addCart} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductInfo;