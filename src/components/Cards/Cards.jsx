import React, { useState, useEffect } from 'react';
import NeedHelpModal from '../Modal/Modal';
import { getAllCars } from '../../redux/operations';
import './Cards.css';
import CardItems from '../CardList/CardItems';

const Cards = () => {
  const [shownModal, setShownModal] = useState(false);
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
  }, []);

  return (
    <div className="Cards">
      <div className="cards-info">
        <div className="card">
          <div className="cards-details">
            <CardItems />
          </div>
        </div>
      </div>
      {shownModal && (
        <NeedHelpModal
          setShowModal={setShownModal}
          onClose={() => setShownModal(false)}
        />
      )}
    </div>
  );
};

export default Cards;
