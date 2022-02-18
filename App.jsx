import React from "react";
import "./App.css";

const wishes = [
  { description: "Become a Web developer", done: false },
  { description: "Buy a car", done: true },
];

//BEM: ex: bloque: wish-input, elemento: wish-input__label wish-input__field
const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input className="wish-input__field" type="text" placeholder="I want to..." />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ done, description }, i) => (
        <li key={description} className="wish-list__item">
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{description}</label>
        </li>
      ))}
    </ul>
    <button type="button" className="wish-clear">Archive all done</button>
  </div>
);

export default App;
