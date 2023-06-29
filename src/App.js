import {Fragment, useState} from 'react';
import './App.css'
import Header from './components/Layout/Header';
import Summary from './components/Layout/Summary';
import ListItems from './components/Meals/ListItems';
import Cart from './components/Cart/CartItems';


function App() {
  const [cartIsShow, setCartIsShown] = useState(false);

  const IsShownHandler = () => {
    setCartIsShown(true);
  }

  const IsHinddenHandler = () => {
    setCartIsShown(false);
  }

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
    <Fragment>
      {cartIsShow && <Cart onClose={IsHinddenHandler} />}
    <div>
      <Header onShowCart = {IsShownHandler} />
    </div>
    <div>
      <Summary />
    </div>
    <ListItems DummyMealsList={DummyMealsList} />
    </Fragment>
    
  );
}

export default App;
