import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from './components/FoodItems';


function App() {
  const [count, setCount] = useState(0);
  const foodItems = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className="App">
      <h1>HEHE FRUITS</h1>
        <FoodItem foodItems={foodItems} />
    </div>
  );
}

export default App;
