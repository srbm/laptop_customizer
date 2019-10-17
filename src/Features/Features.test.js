import React from 'react';
import ReactDOM from 'react-dom';
import Features from './Features';

describe('Features component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Features />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
