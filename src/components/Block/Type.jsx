import React, { useState } from 'react';
import VAN from '../../components/icons/VAN';
import Line from '../../components/icons/Line';
import Fully from '../../components/icons/Fully';
import Alcove from '../../components/icons/Alcove';
import './Type.css';

const Type = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = type => {
    setSelectedType(type);
  };

  return (
    <div className="type-type">
      <p className="type-type-name" style={{ marginTop: 0, marginBottom: 0 }}>
        Vehicle type
      </p>
      <Line />
      <ul className="type-block" style={{ paddingLeft: 0 }}>
        <li
          className={`catalog-type ${selectedType === 'Van' ? 'selected' : ''}`}
          onClick={() => handleTypeSelect('Van')}
        >
          <VAN />
          <p className="type-name">Van</p>
        </li>
        <li
          className={`catalog-type ${
            selectedType === 'Fully Integrated' ? 'selected' : ''
          }`}
          onClick={() => handleTypeSelect('Fully Integrated')}
        >
          <Fully />
          <p className="type-name">Fully Integrated</p>
        </li>
        <li
          className={`catalog-type ${
            selectedType === 'Alcove' ? 'selected' : ''
          }`}
          onClick={() => handleTypeSelect('Alcove')}
        >
          <Alcove width={40} height={29} />
          <p className="type-name">Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default Type;
