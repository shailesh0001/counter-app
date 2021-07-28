/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";



export default function App() {
  const [count, setCount] = useState(1);
  const [maxCount] = useState(1000);

  const increment = () => {
    if(count < maxCount)
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleChange = (event) => {
    const value = Number(event.target.value);
    if(value <= maxCount)
    setCount(value)
  }

  return (
    <div className="App">
      <h1>Counter</h1>

      <div className="container">
        <div className="input-left center-align" onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} className="input-left-icon"></FontAwesomeIcon>
          </div>
          <div className="input-field center-align">
            <input type="text" value={count || 1} onChange={handleChange}/>
          </div>
          <div className="input-right center-align" onClick={increment}>
            <FontAwesomeIcon icon={faPlus} className="input-right-icon"></FontAwesomeIcon>
          </div>
          
        </div>
    </div>
  );
}