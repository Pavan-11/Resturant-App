import React from 'react';
import './Summary.css';

const Summary = () => {
    return(
        <>
        <div className='container'>
            <h1 className='text-summary-heading'>Delicious Food, Delivered To You</h1>
            <div className='text-summary-1'>
                <p>Choose your favaorite meal from our broad selection of avaliable meals and enjoy a delicious <br />
                <span className='summary-span'>lunch or dinner at home</span></p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by <br />
                <span className='summary-span'>experienced chefs!</span></p>
            </div>
            
        </div>
        </>
    )
}

export default Summary;