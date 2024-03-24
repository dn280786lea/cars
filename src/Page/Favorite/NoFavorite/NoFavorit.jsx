import React from 'react';
import { Link } from 'react-router-dom';
import './NoFavorite.css';

const NoFavoritesMessage = () => {
  return (
    <div className="container">
      <h3 className="title_nofav">
        Create your own list of favorite cameras to save the best deals and
        track them in a way that suits you best.
      </h3>
      <p className="text_nofav">
        Browse through our camera catalog and find the ones you like 👇
      </p>
      <Link to="/catalog">
        <button className="bt_nofav" type="button">
          Go to Catalog
        </button>
      </Link>
    </div>
  );
};

export default NoFavoritesMessage;
