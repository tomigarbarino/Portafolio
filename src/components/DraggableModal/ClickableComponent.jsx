import React, { useState } from 'react';
import DraggableModal from './DraggableModal';

const ClickableComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Abrir modal</button>
      {showModal && <DraggableModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ClickableComponent;
