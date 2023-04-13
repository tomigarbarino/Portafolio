import React from 'react';
import Draggable from 'react-draggable';
import './DraggableModal.css';

const DraggableModal = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <Draggable handle=".modal-header">
            <div className="modal">
              <div className="modal-header">
              <img src="https://assets.website-files.com/637fe1f84b89d92db337544d/637fe1f84b89d93246375475_Menu%20bar%20resizer.svg" loading='lazy' alt="Resizer-modal" className='icon-resizer-modal'></img>
                <h3>Título del modal</h3>
                <button onClick={closeModal}>X</button>
              </div>
              <div className="modal-body">
                <p>Contenido del modal</p>
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </>
  );
};

export default DraggableModal;
