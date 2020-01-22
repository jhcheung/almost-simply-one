import React from 'react';
import MainContainer from './containers/MainContainer'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


import './App.css';

function App() {
  return (
    <div className="App">
      <ReactNotification />
        <MainContainer />
    </div>
  );
}

export default App;