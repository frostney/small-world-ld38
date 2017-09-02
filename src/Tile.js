import React from 'react';
import classnames from 'classnames';

import './Tile.css';

const Tile = ({ type, children }) => {
  return (
    <div className={classnames('tile', type)}>
      {children}
    </div>
  );
};

export default Tile;