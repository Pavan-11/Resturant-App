import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <>
        <nav>
            <div className='heading'>
                <h1 className='heading-1'>ReactMeals</h1>
            </div>
            <div className='cart-button'>
                <button type='button' className='btn-1'>Your Cart <span className='cart-value'>0</span></button>
            </div>
        </nav>
        </>
    )
}


export default Header;