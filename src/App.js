import React from 'react';
import './App.css'
import Header from './components/Layout/Header';
import Summary from './components/Layout/Summary';
import ListItems from './components/Meals/ListItems';


function App() {
  const DummyMealsList = [
    {
      id: 1,
      title:'Sushi',
      ingredients: 'Finest fish and veggies',
      price: '$22.99'
    },
    {
      id: 2,
      title: 'Schnitxel',
      ingredients: 'A german specialty',
      price: '$16.50'
    },
    {
      id: 3,
      title: 'Barbecue Burger',
      ingredients: 'American, raw, meaty ',
      price: '$12.99'
    },
    {
      id: 4,
      title: 'Green Bowl',
      ingredients: 'Healthy....and green...',
      price: '$15.99'
    }
  ]
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <Summary />
    </div>
    <ListItems DummyMealsList={DummyMealsList} />
    </>
    
  );
}

export default App;
