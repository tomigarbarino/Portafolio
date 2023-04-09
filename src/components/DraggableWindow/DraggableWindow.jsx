import React, { useState } from 'react';
import './DraggableWindow.css';

function DraggableWindow(props) {
  const { onClose } = props;
  const [isDragging, setIsDragging] = useState(false); // estado para guardar si se está arrastrando la ventana
  const [posX, setPosX] = useState(0); // posición horizontal inicial de la ventana
  const [posY, setPosY] = useState(0); // posición vertical inicial de la ventana

  function handleMouseDown(e) {
    setIsDragging(true); // se empieza a arrastrar la ventana
    setPosX(e.clientX); // se guarda la posición horizontal actual del mouse
    setPosY(e.clientY); // se guarda la posición vertical actual del mouse
  }

  function handleMouseMove(e) {
    if (isDragging) {
      const dx = e.clientX - posX; // diferencia de posición horizontal entre la posición actual y la posición inicial
      const dy = e.clientY - posY; // diferencia de posición vertical entre la posición actual y la posición inicial
      const windowElement = document.getElementById('draggable-window'); // se obtiene el elemento de la ventana
      windowElement.style.left = `${windowElement.offsetLeft + dx}px`; // se actualiza la posición horizontal de la ventana
      windowElement.style.top = `${windowElement.offsetTop + dy}px`; // se actualiza la posición vertical de la ventana
      setPosX(e.clientX); // se actualiza la posición horizontal anterior del mouse
      setPosY(e.clientY); // se actualiza la posición vertical anterior del mouse
    }
  }

  function handleMouseUp() {
    setIsDragging(false); // se deja de arrastrar la ventana
  }

  return (
    <div
      id="draggable-window"
      className="draggable-window"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="window-header">
        <div className="window-title">Ventana Draggable</div>
        <div className="window-close" onClick={onClose}>
          X
        </div>
      </div>
      <div className="window-body">
        Contenido de la ventana draggable
      </div>
    </div>
  );
}

export default DraggableWindow;
