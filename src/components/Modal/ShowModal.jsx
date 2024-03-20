import { useState } from 'react';
import Modal from '../Modal/Modal';
const Modal = () => {
  const [shownModal, setShownModal] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Need help?
      </button>
      {shownModal && <NeedHelpModal setShowModal={setShownModal} />}
      {shownModal && (
        <NeedHelpModal
          setShowModal={setShownModal}
          onClose={() => setShownModal(false)}
        />
      )}
    </>
  );
};
