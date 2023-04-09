import React from 'react';
import Draggable from 'react-draggable';
import './DraggableModal.css';

const DraggableModal = ({ onClose, title, content, icon }) => {
  return (
    <Draggable>
      <div className="modal">
        <div className="modal-header">
        <img src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d93246375475_Menu%20bar%20resizer.svg" loading='lazy' alt="Resizer-modal"  className='icon-resizer-modal'></img>
          {icon && <div className="modal-icon">{icon}</div>}
          <h3>{title || 'Draggable Modal'}</h3>
          <button className="close-button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="modal-content">
          <p>{content || 'Este modal se puede mover'}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableModal;
