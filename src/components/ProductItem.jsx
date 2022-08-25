import React, { useState } from 'react';
import logo from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductItem = () => {

    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    }

    return(
        <div className="ProductItem">
            <img src={bike} alt="" />
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={logo} alt="" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;