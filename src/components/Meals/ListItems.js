import React from 'react';
import ListItemsCard from './ListItemsCard';
import './ListItems.css';

const ListItems = (props) => {
    const renderMealsList = props.DummyMealsList.map((meals) => {
        return (
            <ListItemsCard meals={meals} />
        )
    })
    return (
        <>
        <div className='listItems'>
        {renderMealsList}
        </div>
        </>
    )
}

export default ListItems;