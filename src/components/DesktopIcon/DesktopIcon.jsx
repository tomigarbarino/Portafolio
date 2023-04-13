import React from 'react';
import './DesktopIcon.css';
import DraggableModal from '../DraggableModal/DraggableModal';
import useModal from '../../hooks/useModal';

const DesktopIcon = ({ icon, ariaLabel, title }) => {
  const [showModal, openModal, closeModal] = useModal();

  return (
    <div className="desktop-icon">
      <button onClick={openModal}>
        <img src={icon} alt={ariaLabel} />
        <p>{title}</p>
      </button>
      <DraggableModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default DesktopIcon;
