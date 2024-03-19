import React from 'react';
import Arrow from '../../components/icons/Arrow';
import Line from '../../components/icons/Line';
import './Type.css';

const Type = () => {
  return (
    <div className="type-type">
      <p>Vehicle type</p>
      <Line />
      <ul className="type-block">
        <li className="catalog-type">
          <Arrow />
          <p>AC</p>
        </li>
        <li className="catalog-type">
          <Arrow />
          <p>AC</p>
        </li>
        <li className="catalog-type">
          <Arrow />
          <p>AC</p>
        </li>
      </ul>
    </div>
  );
};

export default Type;
