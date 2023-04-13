import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import './DraggableModal.css';
import useModal from '../../hooks/useModal';

const DraggableModal = ({ onClose }) => {
  const [showModal, openModal, closeModal] = useModal();

  useEffect(() => {
    openModal();
  }, []); // llamada a openModal en la primera renderización

  return (
    <>
      {showModal &&
        <div className="modal-overlay">
          <Draggable handle=".modal-header">
            <div className="modal">
              <div className="modal-header">
                <h3>Título del modal</h3>
                <button onClick={onClose}>X</button>
              </div>
              <div className="modal-body">
                <p>Contenido del modal</p>
              </div>
            </div>
          </Draggable>
        </div>
      }
    </>
  );
};

export default DraggableModal;
