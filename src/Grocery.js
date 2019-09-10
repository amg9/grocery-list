import React from 'react';

const Grocery = ({ id, name, bought, handleClick, }) => (
  <li
    key={id}
    style={ bought ? {...styles.grocery, ...styles.bought} : styles.grocery }
    onClick={ () => handleClick(id) }
  >
    {name}
  </li>
);

const styles = {
  grocery: {
    cursor: "pointer",
  },
  bought: {
    color: "grey", 
    textDecoration: "line-through",
  },
};

export default Grocery;