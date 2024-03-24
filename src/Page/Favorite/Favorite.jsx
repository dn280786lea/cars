import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { clearFavorites } from '../../redux/slice';
import CardItems from '../../components/CardItems/CardItems';

import './Favorite.css';
import NoFavoritesMessage from './NoFavorite/NoFavorit';

const Favorite = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  return (
    <div>
      {favorites && favorites.length > 0 ? (
        <div>
          <div>
            <CardItems cars={favorites} />{' '}
            <button
              className="bt-fav"
              type="button"
              onClick={handleClearFavorites}
            >
              Clear all
            </button>
          </div>
        </div>
      ) : (
        <div>
          <NoFavoritesMessage />
        </div>
      )}
    </div>
  );
};

export default Favorite;
