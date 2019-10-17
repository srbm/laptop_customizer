import React from 'react';
import ReactDOM from 'react-dom';
import Customize from './Customize';

describe('Customize component', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Customize/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});

