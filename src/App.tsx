import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Header.css';
import { Header } from './Header';
import { AdDesigner } from './AdDesigner';
import './AdDesigner.css'
import './Votes.css'
import { Votes } from './Votes'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='Main'>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
      </div>

    </div>
  );
}

export default App;
