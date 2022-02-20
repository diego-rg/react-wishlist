/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

const WishItem = ({ done, description, id, onChangeDone }) => (
    <li key={description} className={`wish-list__item ${done ? "wish-list__item--done" : ""}`}>
          <input id={id} type="checkbox" checked={done} onChange={e => onChangeDone(e.target.checked)} />
          <label htmlFor={id}>{description}</label>
    </li>
);

WishItem.propTypes = {
    done: PropTypes.bool,
    description: PropTypes.string,
    id: PropTypes.string,
    onChangeDone: PropTypes.func
}

WishItem.defaultProps = {
    done: false,
    description: "",
    id: "",
    onChangeDone: () => {}
}

export default WishItem;
