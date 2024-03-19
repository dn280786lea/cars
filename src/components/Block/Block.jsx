import React from 'react';
import Arrow from '../../components/icons/Arrow';
import Line from '../../components/icons/Line';
import './Block.css';

const Block = () => {
  return (
    <div className="filter">
      <h3>Filters</h3>
      <p>Vehicle equipment</p>
      <Line />
      <ul className="catalog-block">
        <li className="catalog-list">
          <Arrow />
          <p>AC</p>
        </li>
        <li className="catalog-list">
          <Arrow />
          <p>AC</p>
        </li>
        <li className="catalog-list">
          <Arrow />
          <p>AC</p>
        </li>
        <li className="catalog-list">
          <Arrow />
          <p>AC</p>
        </li>
        <li className="catalog-list">
          <Arrow />
          <p>AC</p>
        </li>
      </ul>
    </div>
  );
};

export default Block;
