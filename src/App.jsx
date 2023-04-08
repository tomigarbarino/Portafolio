import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Shortcut from './components/ShortCut/ShortCut'

function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingScreenEnd = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div className="App">
      <LoadingScreen onEnd={handleLoadingScreenEnd} showLoadingScreen={showLoadingScreen} />
      <Navbar />
      <Shortcut
        name="pepe"
      />
    </div>
  );
}

export default App;
