import react from 'react';
import './MealItemForm.css';

const MealItemForm = () => {
    return(
        <form className='meal-item-form'>
            <div className='input'>
            <label htmlFor='amount'>Amount</label>
            <input type='number' placeholder='0' id="amount"/>
            </div>
            <button className='add-to-cart-btn'>+ Add</button>
        </form>
    ) 
}

export default MealItemForm;