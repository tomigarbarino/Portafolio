import React, { useState } from 'react';
import './Shortcut.css';
import DraggableWindow from '../DraggableWindow/DraggableWindow.jsx';

function Shortcut() {
  const [showWindow, setShowWindow] = useState(false);

  function handleClick() {
    setShowWindow(true);
  }

  return (
    <div className="shortcut" onClick={handleClick}>
      <img src={icon} alt="Shortcut Icon" />
      <div className="shortcut-info">
        <div className="shortcut-name">Shortcut</div>
      </div>
      {showWindow && <DraggableWindow onClose={() => setShowWindow(false)} />}
    </div>
  );
}

export default Shortcut;
