import React from 'react';
import Arrow from '../../components/icons/Arrow';
import Line from '../../components/icons/Line';
import './Type.css';

const Type = () => {
  return (
    <div className="type-type">
      <p>Vehicle type</p>
      <Line />
      <ul className="type-block" style={{ paddingLeft: 0 }}>
        <li className="catalog-type">
          <Arrow />
          <p className="type-name">Van</p>
        </li>
        <li className="catalog-type">
          <Arrow />
          <p className="type-name">Fully Integrated</p>
        </li>
        <li className="catalog-type">
          <Arrow />
          <p className="type-name">Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default Type;
