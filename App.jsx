/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useState } from "react";
import "./App.css";
import WishInput from "./WishInput";// Importamos o compoñente que representa o input de texto do desexo
import WishList from "./WishList";// Importamos o compoñente que representa a lista de desexos

const initialWishes = [
  { description: "Become a Web developer", done: false },
  { description: "Buy a car", done: true }
];

// BEM: ex: bloque: wish-input, elemento: wish-input__label wish-input__field. Con subelementos podemos usar: wish-input__label span
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
    <h1>My wishlist</h1>
    <WishInput onNewWish={wish => setWishes([wish, ...wishes])} />
    <WishList wishes={wishes}/>
    <button type="button" className="wish-clear">Archive all done</button>
  </div>
  );
}

export default App;
