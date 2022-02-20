/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from 'react';
import PropTypes from "prop-types";// npm para comprobar o typo de prop que pasamos

// pasamos prop wishes
const WishList = ({ wishes }) => (
    <ul className="wish-list">
      {wishes.map(({ done, description }, i) => (
        <li key={description} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{description}</label>
        </li>
      ))}
    </ul>
);

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape({
        done: PropTypes.bool,
        text: PropTypes.string
    }))
}

WishList.defaultProps = {
    wishes: []
}

export default WishList;
