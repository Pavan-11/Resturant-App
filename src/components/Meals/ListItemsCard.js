import React from 'react';
import './ListItemsCard.css';

const ListItemsCard = (props) => {
    const { title, ingredients, price } = props.meals;
    return (
        <>
            <div className='listitems'>

                <div><h3><strong>{title}</strong></h3></div>
                <div style={{ color: "gray", fontStyle:'italic', fontWeight:'lighter' }}>{ingredients}</div>
                <div style={{color:'brown',fontWeight:'bold'}}>{price}</div>
                <hr></hr>
              
            </div>
        </>
    )
}

export default ListItemsCard;