import React, { useEffect, useState } from 'react';
import { getCarById } from '../../redux/operations';
import Line from 'components/icons/Line';
import Rating from '@mui/material/Rating';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainModal = () => {
  const [car, setCar] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleDateChange = event => {
    setDate(event.target.value);
  };

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      date.trim() === '' ||
      comment.trim() === ''
    ) {
      toast.error('Please fill in all fields.');
      return;
    }

    console.log(name, email, date, comment);

    toast.success('Form submitted successfully!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    setName('');
    setEmail('');
    setDate('');
    setComment('');
  };

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
      <div className="data-features">
        <Line />
        <div className="modal-cars-modal" key={car._id}>
          <ul className="detail-container">
            {car.reviews.map((review, index) => (
              <li key={index} className="reviews-icons">
                <span className="reviews-container">
                  {review.reviewer_name}
                </span>
                <div className="rating-modal-container">
                  <Rating
                    name="half-rating-read"
                    value={car.rating.toFixed(1)}
                    precision={0.1}
                    readOnly
                    max={5}
                    className="rating-modal"
                  />
                </div>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Book your campervan now</h2>
          <p>Stay connected! We are always ready to help you.</p>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-container">
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
            <div className="calendar-overlay"></div>
          </div>
          <div className="form-row">
            <textarea
              type="text"
              name="comment"
              placeholder="Comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <button className="features-submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MainModal;
