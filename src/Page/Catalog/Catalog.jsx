import React, { useState } from 'react';
import Block from '../../components/Block/Block';
import Type from '../../components/Block/Type';
import Cards from '../../components/Cards/Cards';
import './Catalog.css';

const Catalog = () => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <div className="catalog">
      <div className="catalog-content">
        <div className="left-content">
          <div className="location">
            <form action="">
              <h3>Location</h3>
              <input
                className="location_input"
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter location"
              />
            </form>
          </div>
          <div className="block">
            <Block />
          </div>
          <div className="type">
            <Type />
          </div>
          <button className="catalog-submit" type="submit">
            Search
          </button>
        </div>
        <div className="right-content">
          <div className="cards-name-info">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
