import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import DesktopIcon from './components/DesktopIcon/DesktopIcon';

function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingScreenEnd = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div className="App">
      <LoadingScreen onEnd={handleLoadingScreenEnd} showLoadingScreen={showLoadingScreen} />
      <Navbar />
      <DesktopIcon
        icon="ruta/al/icono"
        ariaLabel="Ejemplo"
        title="Ejemplo"
      />
    </div>
  );
}

export default App;
