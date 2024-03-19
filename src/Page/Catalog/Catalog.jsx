import React, { useState } from 'react';
import Block from '../../components/Block/Block';
import Type from '../../components/Block/Type';
import './Catalog.css';

const Catalog = () => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <div className="catalog">
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
  );
};

export default Catalog;
