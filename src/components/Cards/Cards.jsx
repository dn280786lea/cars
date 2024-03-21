import React, { useState, useEffect } from 'react';
import { getAllCars } from '../../redux/operations';
import './Cards.css';
import CardItems from '../CardList/CardItems';

const Cards = () => {
  const [setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const trendingCars = await getAllCars();
        setCars(trendingCars.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCars();
  }, [setCars]);

  return (
    <div className="Cards">
      <div className="cards-info">
        <div className="card">
          <div className="cards-details">
            <CardItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
