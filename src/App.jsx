import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ isOnline, setIsOnline ] = useState(true);

  useEffect(() => {
    function handleOnline(){
      setIsOnline(true);
    }

    function handleOffline(){
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }
  }, []);

  function handleSaveClick(){
    alert("Progress Saved!");
  }

  return (
    <>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? 'Save Progress' : 'Reconnecting ...'}  
      </button>    
    </>
  )
}

export default App
