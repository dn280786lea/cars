import React, { useState } from 'react';
import Kitchen from 'components/icons/Kitchen';
import Adults from 'components/icons/Adults';
import Arrow from 'components/icons/Arrow';
import Petrol from 'components/icons/Petrol';
import Beds from 'components/icons/Petrol';
import Bloom from 'components/icons/Bloom';
import Line from 'components/icons/Line';
import './Features.css';
import BookForm from '../../components/BookForm/BookForm';

const Features = ({ carId }) => {
  const [car, setCar] = useState(null);

  if (!car) {
    fetch(`https://65f98457df1514524611d93d.mockapi.io/adverts/cars//${carId}`)
      .then(response => response.json())
      .then(data => setCar(data))
      .catch(error => console.error('Error fetching car data:', error));

    return <div>Loading car...</div>;
  }
  return (
    <div className="features-detail-cars" id="catalog">
      <div className="data-features">
        <Line />
        <div
          className="modal-cars-modal"
          key={car._id}
          style={{ marginLeft: '0px', width: '40000px' }}
        >
          <ul className="detail-container">
            <li className="data-icons">
              <span className="icon-container">
                <Adults />
              </span>
              {car.adults && <>Adults: {car.adults}</>}
            </li>
            <li className="data-icons">
              <span className="icon-container">
                <Arrow />
              </span>
              {car.transmission}
            </li>
            <li className="data-icons">
              <span className="icon-container">
                <Petrol />
              </span>
              {car.engine}
            </li>
            <li className="data-icons">
              <span className="icon-container">
                <Kitchen />
              </span>
              Kitchen: {car.details.kitchen}
            </li>
            <li className="data-icons">
              <span className="icon-container">
                <Beds />
              </span>
              {car.details.beds && <>Beds: {car.details.beds}</>}
            </li>
            <li className="data-icons">
              <span className="icon-container">
                <Bloom />
              </span>{' '}
              AC
              {car.details.toilet}
            </li>
          </ul>

          <h2>Vehicle details</h2>
          <ul className=" data-container">
            <li className="data-character">
              Form: <span className="span-features">{car.form}</span>
            </li>
            <li className="data-character">
              Length: <span className="span-features"></span>
              {car.length}
            </li>
            <li className="data-character">
              Width:<span className="span-features">{car.width}</span>
            </li>
            <li className="data-character">
              Height: <span className="span-features">{car.height}</span>
            </li>
            <li className="data-character">
              Tank: <span className="span-features">{car.tank}</span>
            </li>
            <li className="data-character">
              Consumption:{' '}
              <span className="span-features">{car.consumption}</span>
            </li>
          </ul>
        </div>
        <BookForm />
      </div>
    </div>
  );
};

export default Features;
