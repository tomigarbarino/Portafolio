import React, { useState, useRef, useEffect } from 'react';
import './DraggableWindow.css';

function FloatingWindow(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [topPosition, setTopPosition] = useState(50);
  const [leftPosition, setLeftPosition] = useState(50);
  const [windowWidth, setWindowWidth] = useState(400);
  const [windowHeight, setWindowHeight] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartX, setResizeStartX] = useState(0);
  const [resizeStartY, setResizeStartY] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const windowRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  function handleMouseDown(event) {
    setIsDragging(true);

    const windowElement = windowRef.current;
    const boundingRect = windowElement.getBoundingClientRect();

    setTopPosition(event.clientY - boundingRect.top);
    setLeftPosition(event.clientX - boundingRect.left);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      setTopPosition(event.clientY - windowRef.current.offsetHeight / 2);
      setLeftPosition(event.clientX - windowRef.current.offsetWidth / 2);
    } else if (isResizing) {
      const newWidth = Math.max(200, windowWidth + event.clientX - resizeStartX);
      const newHeight = Math.max(100, windowHeight + event.clientY - resizeStartY);

      setWindowWidth(newWidth);
      setWindowHeight(newHeight);

      setResizeStartX(event.clientX);
      setResizeStartY(event.clientY);
    }
  }

  function handleMouseUp() {
    setIsDragging(false);
    setIsResizing(false);
  }

  function handleResizeMouseDown(event) {
    setIsResizing(true);

    setResizeStartX(event.clientX);
    setResizeStartY(event.clientY);
  }

  function handleCloseClick() {
    setIsClosing(true);
  }

  return (
    <div
      ref={windowRef}
      className={`floating-window ${isClosing ? 'closing' : ''}`}
      style={{
        top: `${topPosition}px`,
        left: `${leftPosition}px`,
        width: `${windowWidth}px`,
        height: `${windowHeight}px`,
      }}
    >
      <div className="window-title-bar" onMouseDown={handleMouseDown}>
        <div className="window-title">{props.title}</div>
        <div className="window-controls">
          <div className="window-control" onMouseDown={handleResizeMouseDown}></div>
          <div className="window-control" onClick={handleCloseClick}></div>
        </div>
      </div>
      <div className="window-content">{props.children}</div>
    </div>
  );
}

export default FloatingWindow;
