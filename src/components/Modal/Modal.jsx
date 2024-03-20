import './Modal.css';
import React, { useEffect } from 'react';
import Close from '../icons/Close.jsx';

const NeedHelpModal = ({ setShowModal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setShowModal(false);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; //

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

  return (
    <div className="modal-overlay">
      <div className="modal-help">
        <form onSubmit={handleSubmit} className="help-form">
          <button type="button" className="close-button" onClick={onClose}>
            {' '}
            <Close />
          </button>
          <h2 className="form-title-lh">Need Help</h2>
          <button type="submit" className="btn-send-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default NeedHelpModal;
