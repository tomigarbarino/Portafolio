import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/NavBar.jsx'
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx'
import ClickableComponent from './components/DraggableModal/ClickableComponent.jsx';



function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingScreenEnd = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div className="App">
      <LoadingScreen onEnd={handleLoadingScreenEnd} showLoadingScreen={showLoadingScreen} />
      <Navbar />
      <ClickableComponent />
    </div>
  );
}

export default App;
