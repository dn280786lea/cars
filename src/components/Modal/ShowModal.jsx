import { useState } from 'react';
import NeedHelpModal from '../Modal/Modal';

const ModalWrapper = () => {
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

export default ModalWrapper;
