/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";

// compoñente que representa o input de texto do desexo
const WishInput = () => (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input className="wish-input__field" type="text" placeholder="I want to..." />
    </fieldset>
);

export default WishInput;
