/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const WishItem = ({ done, description, id, onChangeDone }) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        let ageInterval;
        if (done) {
            setAge(0);
        } else {
            ageInterval = setInterval(() => {
                if (done) {
                    clearInterval(ageInterval);
                } else {
                    setAge(a => a + 1);
                }
            }, 1000);
        }
        return () => clearInterval(ageInterval);
    }, [done]);

    return (
        <li key={description} className={`wish-list__item ${done ? "wish-list__item--done" : ""} 
        ${(age >= 3 && age < 5) ? "wish-list__item--orange" : ""} ${(age >= 5) ? "wish-list__item--red" : ""}`}>
              <input id={id} type="checkbox" checked={done} onChange={e => onChangeDone(e.target.checked)} />
              <label htmlFor={id}>{description}</label>
        </li>
    );
}

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
