import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';
import './CardList.css';
import { Loader } from '../Loader/Loader';
import CardItems from 'components/CardItems/CardItems';

const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [displayedCars, setDisplayedCars] = useState(4);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const loadMore = () => {
    setDisplayedCars(prev => prev + 4);
  };

  if (!cars) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="catalog-cars" id="catalog">
      <CardItems cars={cars.slice(0, displayedCars)} />
      <div>
        {displayedCars < cars.length && (
          <button className="loadmore" onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CardList;
