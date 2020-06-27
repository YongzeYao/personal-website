import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.scss';

import Home from './home';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
