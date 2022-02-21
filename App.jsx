/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useState } from "react";
import "./App.css";
import WishInput from "./WishInput";// Importamos o compoñente que representa o input de texto do desexo
import WishList from "./WishList";// Importamos o compoñente que representa a lista de desexos

const initialWishes = [
  { description: "Become a Web developer", done: false },
  { description: "Buy a car", done: true },
  { description: "Get some food", done: false }
];

// BEM: ex: bloque: wish-input, elemento: wish-input__label wish-input__field. Con subelementos podemos usar: wish-input__label span
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1 className="wishlist-title">My wishlist</h1>
      <WishInput onNewWish={wish => setWishes([...wishes, wish])} />
      <WishList wishes={wishes} onWishesChange={wishes => setWishes(wishes)} />
      <button type="button" className="wish-clear" onClick={() => setWishes(wishes.filter(wish => !wish.done))}>Archive all done</button>
    </div>
  );
}

export default App;
