import React from 'react';
import Aframe from './components/Aframe';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path='/' component={Aframe} />
    </div>
  </BrowserRouter>
)

export default App;
