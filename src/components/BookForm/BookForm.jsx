import React, { useState } from 'react';
import './BookForm.css';

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
    alert(`A name was submitted`);
  };

  return (
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
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div className="input-container">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
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
        />
      </div>
      <button className="features-submit" type="submit">
        Send
      </button>
    </form>
  );
};

export default BookForm;
