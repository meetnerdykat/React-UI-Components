import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Moment from 'react-moment';
import 'moment-timezone';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* src={}  */}
      <div className="container">
        <HeaderContainer />
      </div>
      {/* end ALL div */}
    </div>
  );
};

export default App;
