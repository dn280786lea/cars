import React, { useEffect, useState } from 'react';
import { getCarById } from '../../redux/operations';
import Kitchen from 'components/icons/Kitchen';
import Adults from 'components/icons/Adults';
import Arrow from 'components/icons/Arrow';
import Petrol from 'components/icons/Petrol';
import Beds from 'components/icons/Petrol';
import Bloom from 'components/icons/Bloom';
import Line from 'components/icons/Line';

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
      <div className="data-features">
        <Line />
        <div className="modal-cars-modal" key={car._id}>
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
          <button className="features-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainModal;
