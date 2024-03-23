import React, { useEffect, useState } from 'react';
import Kitchen from 'components/icons/Kitchen';
import Adults from 'components/icons/Adults';
import Arrow from 'components/icons/Arrow';
import Petrol from 'components/icons/Petrol';
import Beds from 'components/icons/Beds';
import Bloom from 'components/icons/Bloom';
import Line from 'components/icons/Line';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';

const Review = ({ closeModal }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDateChange = date => {
    const selectedDate = date.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];

    if (selectedDate < today) {
      toast.error('Please select a date from today onwards!');
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      bookingDate: selectedDate,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    toast.success('Your message was sent successfully ✅');

    closeModal();
  };

  /*  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await getCarById('4');
        setCar(carData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setCar(null);
        setLoading(false);
      }
    };
    fetchCar();
  }, []);
 */
  if (loading) {
    return (
      <div>
        <Loader />.
      </div>
    );
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
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Book your campervan now</h2>
          <p>Stay connected! We are always ready to help you.</p>
          <div className="form-row">
            <label htmlFor="name" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="bookingDate" />
            <input
              type="date"
              name="bookingDate"
              placeholder="Booking date"
              value={formData.bookingDate}
              onChange={handleDateChange}
              required
            />
          </div>
          <div className="form-row">
            <textarea
              type="text"
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>
          <button
            className="features-submit"
            type="submit"
            disabled={
              !formData.name || !formData.email || !formData.bookingDate
            }
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
