/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useState } from "react";
import PropTypes from "prop-types";

// compoñente que representa o input de texto do desexo
const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishText] = useState("");
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input className="wish-input__field" type="text" placeholder="I want to..." value={newWishText} onChange={e => setNewWishText(e.target.value)} />
      <button type="button" className="wish-input__add" onClick={() => {
        if (newWishText.length) {
          onNewWish({ done: false, description: newWishText });
          setNewWishText("") // limpa o input despois de mandalo
        }
      }}>Save</button>
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func
}

WishInput.defaultProps = {
  onNewWish: () => {}
}

export default WishInput;
