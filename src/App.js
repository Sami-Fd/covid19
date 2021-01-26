import React from 'react';
import AllScreen from './comp/AllScreen'
import './App.css';
import { MainProvider } from './context/MainContext'


function App() {

  return (
    <>
      <MainProvider>
        <div>
          <AllScreen />
        </div>
      </MainProvider>
    </>
  );
}

export default App;
