import React, { useEffect, useState } from 'react';
import { getCarById } from '../../redux/operations';
import Kitchen from 'components/icons/Kitchen';
import Adults from 'components/icons/Adults';
import Arrow from 'components/icons/Arrow';
import Petrol from 'components/icons/Petrol';
import Beds from 'components/icons/Petrol';
import Bloom from 'components/icons/Bloom';
import Line from 'components/icons/Line';
import {} from './Features.css';

const MainModal = () => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getCarById('4');
        setCar(carData);
      } catch (error) {
        console.error('Error fetching car information:', error);
        setCar(null);
      }
    };
    fetchCar();
  }, []);

  if (!car) {
    return <div>Loading car...</div>;
  }

  return (
    <div className="features-detail-cars" id="catalog">
      <h2>Features</h2>
      <Line />
      <div className="features-wrapper-modal">
        <div className="modal-cars-modal" key={car._id}>
          <div className="modal-car">
            <div className="details-container"></div>
            <div className="detail-container">
              <div className="data-icons">
                <span className="icon-container">
                  <Adults />
                </span>
                {car.adults && <>Adults: {car.adults}</>}
              </div>
              <div className="data-icons">
                <span className="icon-container">
                  <Arrow />
                </span>
                {car.transmission}
              </div>
              <div className="data-icons">
                {' '}
                <span className="icon-container">
                  <Petrol />
                </span>
                {car.engine}
              </div>
              <div className="data-icons">
                <span className="icon-container">
                  <Kitchen />
                </span>
                Kitchen: {car.details.kitchen}
              </div>
              <div className="data-icons">
                <span className="icon-container">
                  <Beds />
                </span>
                {car.details.beds && <>Beds: {car.details.beds}</>}
              </div>
              <li className="data-icons">
                <span className="icon-container">
                  <Bloom />
                </span>{' '}
                AC
                {car.details.toilet}
              </li>
            </div>
          </div>
        </div>

        <h2>Vehicle details</h2>
        <div className=" data-container">
          <div className="data-character">
            Form: <span className="span-features">{car.form}</span>
          </div>
          <div className="data-character">
            Length: <span className="span-features"></span>
            {car.length}
          </div>
          <div className="data-character">
            Width:<span className="span-features">{car.width}</span>
          </div>
          <div className="data-character">
            Height: <span className="span-features">{car.height}</span>
          </div>
          <div className="data-character">
            Tank: <span className="span-features">{car.tank}</span>
          </div>
          <div className="data-character">
            Consumption:{' '}
            <span className="span-features">{car.consumption}</span>
          </div>
        </div>
        <div className="form-book">
          <form action="form" className="form-container">
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <div className="form-row">
              <input type="text" name="text" placeholder="Name" />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="date" name="date" placeholder="Booking date" />
            </div>
            <div className="form-row">
              <textarea type="text" name="comment" placeholder="Comment" />
            </div>
            <button className="catalog-submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
