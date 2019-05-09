import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Moment from 'react-moment';
import 'moment-timezone';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <HeaderContainer />
        <CardContainer />
      </div>
      {/* end ALL div */}
    </div>
  );
};

export default App;
