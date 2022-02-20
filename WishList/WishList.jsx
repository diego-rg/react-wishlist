/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import PropTypes from "prop-types";// npm para comprobar o typo de prop que pasamos
import WishItem from "./WishItem";

// pasamos prop wishes
const WishList = ({ wishes, onWishesChange }) => (
    <ul className="wish-list">
      {wishes.map(({ done, description }, i) => (
        <WishItem description={description} done={done} id={`wish${i}`} key={description} onChangeDone={(value) => {
          const updatedWishes = [...wishes];
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }} />
      ))}
    </ul>
);

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)), // Usamos a referencia ás Props xa descritas en WishItem
    onWishesChange: PropTypes.func
}

WishList.defaultProps = {
    wishes: [],
    onWishesChange: () => {}
}

export default WishList;
