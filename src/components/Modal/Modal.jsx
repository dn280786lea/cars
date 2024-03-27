import './Modal.css';
import React, { useEffect, useRef, useState } from 'react';
import Close from '../icons/Close.jsx';
import Rating from '@mui/material/Rating';
import Tabs from '../Tab/Tab';
import Location from 'components/icons/Location';

const NeedHelpModal = ({ car, setShowModal, onClose }) => {
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setShowModal(false);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [setShowModal, onClose]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setShowModal(false);
    onClose();
  };

  if (!car) {
    return null;
  }
  if (!car) {
    return <div>Loading car...</div>;
  }

  const countReviews = reviews => {
    return reviews.length;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-help">
        <form onSubmit={handleSubmit} className="help-form" ref={modalRef}>
          <button type="button" className="close-button" onClick={onClose}>
            <Close />
          </button>
          <div className="detail-cars" id="catalog">
            <div className="wrapper-modal">
              <div className="modal-cars-modal" key={car._id}>
                <div className="modal-car">
                  <div className="details-container">
                    <div className="title-container">
                      <div className="car-modal-detal">
                        <h2 className="title-cars">{car.name}</h2>
                        <div className="car-datail-review">
                          <div className="rating-container">
                            <div className="rating">
                              <Rating
                                name="half-rating-read"
                                value={parseFloat(car.rating.toFixed(1))}
                                precision={0.1}
                                readOnly
                                max={1}
                              />
                            </div>
                            <p>{car.rating}</p>
                            <p className="car-reviews">
                              (Reviews: {countReviews(car.reviews)})
                            </p>
                          </div>
                          <p className="local-modal">
                            <Location /> {car.location}
                          </p>
                        </div>
                        <h2 className="title-price-modal">
                          Price: ${car.price}
                        </h2>
                      </div>
                    </div>
                    <div className="image-wrapper">
                      {car.gallery.map((photo, index) => (
                        <img
                          key={index}
                          className="car-photo-modal"
                          src={photo}
                          alt=""
                        />
                      ))}
                    </div>
                    <p className="description-modal">
                      Description: {car.description}
                    </p>

                    <div>
                      <Tabs
                        carId={car._id}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NeedHelpModal;
