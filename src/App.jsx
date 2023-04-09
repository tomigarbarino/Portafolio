import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Shortcut from './components/ShortCut/ShortCut.jsx'



function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingScreenEnd = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div className="App">
      <LoadingScreen onEnd={handleLoadingScreenEnd} showLoadingScreen={showLoadingScreen} />
      <Navbar />
      <Shortcut/>
    </div>
  );
}

export default App;
