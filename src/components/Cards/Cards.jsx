import React from 'react';

import './Cards.css';
import CardItems from '../CardList/CardList';

const Cards = () => {
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
