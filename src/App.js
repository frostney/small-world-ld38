import React, { Component } from 'react';
import Layer from './Layer';
import Tile from './Tile';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layer>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />

          <Tile />
          <Tile />
          <Tile>
            <div style={{ width: 40, height: 40, backgroundColor: 'lime' }} />
          </Tile>
          <Tile />
          <Tile />
          <Tile />

          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />

          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />

          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />

          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Layer>
      </div>
    );
  }
}

export default App;
