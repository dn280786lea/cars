import React from 'react';
import Arrow from '../../components/icons/Arrow';
import Line from '../../components/icons/Line';
import Bloom from '../../components/icons/Bloom';
import Kitchen from '../../components/icons/Kitchen';
import TV from '../../components/icons/TV';
import Shower from '../../components/icons/Shower';

import './Block.css';

const Block = () => {
  return (
    <div className="filter">
      <h3>Filters</h3>
      <p className="filter-name" style={{ marginTop: 0, marginBottom: 0 }}>
        Vehicle equipment
      </p>
      <Line />
      <ul className="catalog-block" style={{ paddingLeft: 0 }}>
        <li className="catalog-list">
          <Bloom />
          <p className="block-name">AC</p>
        </li>
        <li className="catalog-list">
          <Arrow />
          <p className="block-name">Automatic</p>
        </li>
        <li className="catalog-list">
          <Kitchen />
          <p className="block-name">Kitchen</p>
        </li>
        <li className="catalog-list">
          <TV />
          <p className="block-name">TV</p>
        </li>
        <li className="catalog-list">
          <Shower />
          <p className="block-name">Shower/WC</p>
        </li>
      </ul>
    </div>
  );
};

export default Block;
