import React, { useState } from 'react';
import './Shortcut.css';
import DraggableWindow from './DraggableWindow/DraggableWindow.jsx';

function Shortcut(props) {
  const { name, icon } = props;
  const [showSecondary, setShowSecondary] = useState(false);
  const [secondaryContent, setSecondaryContent] = useState(null); // nuevo estado para el contenido de la ventana

  function handleClick() {
    // Cambia el estado de showSecondary y agrega el contenido para mostrar en la ventana
    setShowSecondary(true);
    setSecondaryContent(
      <div>
        <h1>{name}</h1>
        <p>Contenido de la ventana secundaria aquí.</p>
      </div>
    );
  }

  return (
    <div className="shortcut" onClick={handleClick}>
      <img src={icon} alt={name} />
      <div className="shortcut-info">
        <div className="shortcut-name">{name}</div>
      </div>
      {showSecondary && <DraggableWindow content={secondaryContent} onClose={() => setShowSecondary(false)} />} // componente secundario
    </div>
  );
}

export default Shortcut;
