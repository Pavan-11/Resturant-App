import React from 'react';
import './ListItemsCard.css';

const ListItemsCard = (props) => {
    const { title, ingredients, price } = props.meals;
    return (
        <>
            <div className='listitems'>

                <div>{title}</div>
                <div>{ingredients}</div>
                <div>{price}</div>
                <hr></hr>
              
            </div>
        </>
    )
}

export default ListItemsCard;