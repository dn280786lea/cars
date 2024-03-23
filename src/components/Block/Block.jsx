import React, { useState } from 'react';
import Arrow from '../../components/icons/Arrow';
import Line from '../../components/icons/Line';
import Bloom from '../../components/icons/Bloom';
import Kitchen from '../../components/icons/Kitchen';
import TV from '../../components/icons/TV';
import Shower from '../../components/icons/Shower';

import './Block.css';

const Block = () => {
  const [checkedItems, setCheckedItems] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Shower: false,
  });

  const handleCheckboxChange = itemName => {
    setCheckedItems(prevState => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  return (
    <div className="filter">
      <h3>Filters</h3>
      <p className="filter-name" style={{ marginTop: 0, marginBottom: 0 }}>
        Vehicle equipment
      </p>
      <Line />
      <ul className="catalog-block" style={{ paddingLeft: 0 }}>
        <li
          className={`catalog-list ${checkedItems.AC ? 'checked' : ''}`}
          onClick={() => handleCheckboxChange('AC')}
        >
          <div className="checkbox-item">
            <input
              className="checkbox"
              type="checkbox"
              checked={checkedItems.AC}
              onChange={() => {}}
            />
            <span className="vehicle-icons">
              <Bloom width={32} height={32} />
            </span>
          </div>
          <p className="block-name">AC</p>
        </li>
        <li
          className={`catalog-list ${checkedItems.Automatic ? 'checked' : ''}`}
          onClick={() => handleCheckboxChange('Automatic')}
        >
          <div className="checkbox-item">
            <input
              className="checkbox"
              type="checkbox"
              checked={checkedItems.Automatic}
              onChange={() => {}}
            />
            <span className="vehicle-icons">
              <Arrow width={32} height={32} />
            </span>
          </div>
          <p className="block-name">Automatic</p>
        </li>
        <li
          className={`catalog-list ${checkedItems.Kitchen ? 'checked' : ''}`}
          onClick={() => handleCheckboxChange('Kitchen')}
        >
          <div className="checkbox-item">
            <input
              className="checkbox"
              type="checkbox"
              checked={checkedItems.Kitchen}
              onChange={() => {}}
            />
            <span className="vehicle-icons">
              <Kitchen width={32} height={32} />
            </span>
          </div>
          <p className="block-name">Kitchen</p>
        </li>
        <li
          className={`catalog-list ${checkedItems.TV ? 'checked' : ''}`}
          onClick={() => handleCheckboxChange('TV')}
        >
          <div className="checkbox-item">
            <input
              className="checkbox"
              type="checkbox"
              checked={checkedItems.TV}
              onChange={() => {}}
            />
            <span className="vehicle-icons">
              <TV width={32} height={32} />
            </span>
          </div>
          <p className="block-name">TV</p>
        </li>
        <li
          className={`catalog-list ${checkedItems.Shower ? 'checked' : ''}`}
          onClick={() => handleCheckboxChange('Shower')}
        >
          <div className="checkbox-item">
            <input
              className="checkbox"
              type="checkbox"
              checked={checkedItems.Shower}
              onChange={() => {}}
            />
            <span className="vehicle-icons">
              <Shower width={32} height={32} />
            </span>
          </div>
          <p className="block-name">Shower</p>
        </li>
      </ul>
    </div>
  );
};

export default Block;
