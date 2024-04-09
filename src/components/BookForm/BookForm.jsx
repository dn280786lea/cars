import React, { useState } from 'react';
import './BookForm.css';
import { toast } from 'react-toastify';

const BookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    text: '',
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.date.trim() === '' ||
      formData.text.trim() === ''
    ) {
      toast.error('All fields are required', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: 'Bounce',
      });
    } else {
      // Виведення даних форми в консоль
      console.log('Form submitted successfully', formData);

      toast.success('Form submitted successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: 'Bounce',
      });

      setFormData({
        name: '',
        email: '',
        date: '',
        text: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
        <div className="form-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <div className="calendar-overlay"></div>
        </div>
        <div className="form-row">
          <textarea
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Comment"
            required
          />
        </div>
        <button className="features-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
