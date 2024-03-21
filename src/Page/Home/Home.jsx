import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="background-image">
        <h1 className="title" style={{ marginTop: 0 }}>
          Rent camper
        </h1>
        <div className="main-text">
          <h2 className="main-title">
            Welcome to our <span className="span-camper">Camper Rental</span>{' '}
            service!
          </h2>
          <p className="home-text">
            Explore the beauty of our country at your own pace with our wide
            selection of campers available for rent."
          </p>
          <p className="home-text">
            "Our company offers top-notch camper rental options, ensuring a
            comfortable and memorable travel experience for our customers
            throughout Ukraine." "From the picturesque Carpathian Mountains to
            the stunning Black Sea coast, our campers provide the perfect
            opportunity to discover Ukraine's diverse landscapes and rich
            cultural heritage."
          </p>
          <Link className="home-sub" to="/catalog">
            <button className="home-submit" type="submit">
              view catalog
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
