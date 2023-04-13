import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'



function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingScreenEnd = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div className="App">
      <LoadingScreen onEnd={handleLoadingScreenEnd} showLoadingScreen={showLoadingScreen} />
      <Navbar />
    </div>
  );
}

export default App;
