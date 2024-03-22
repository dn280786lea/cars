import React, { useState, useEffect } from 'react';
import Block from '../../components/Block/Block';
import Type from '../../components/Block/Type';
import Cards from '../../components/Cards/Cards';
import { fetchLocations } from '../../redux/operations';
import './Catalog.css';
import Location from '../../components/icons/Location';

const Catalog = () => {
  const [text, setText] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocationsData = async () => {
      try {
        const uniqueLocations = await fetchLocations();
        setLocations(uniqueLocations);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocationsData();
  }, []);

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
              <select
                className="location_input"
                value={text}
                onChange={handleChange}
              >
                <option value="">Select location</option>

                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    <p className="local-modal">
                      <Location />
                      {location}
                    </p>
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="block">
            <Block />
          </div>
          <div className="type">
            <Type />
          </div>
          <button
            className="catalog-submit"
            type="submit"
            /*  onSubmit={handleSubmit} */
          >
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
