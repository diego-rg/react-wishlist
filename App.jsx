import React from "react";

const wishes = [
    { description: "Become a Web developer", done: false },
    { description: "Buy a car", done: true }
];

const App = () => (
    <div>
        <h1>My wishlist</h1>
        <fieldset>
            <legend>New wish</legend>
            <input type="text" name="" id="" placeholder="I want to..." />
        </fieldset>
        <ul>
            {wishes.map(wish => (
                <li>{wish.description}</li>
            ))}
        </ul>
    </div>
);

export default App;