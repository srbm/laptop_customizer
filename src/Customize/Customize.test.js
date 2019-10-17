import React from 'react';
import ReactDOM from 'react-dom';
import Customize from './Customize';
import App from '../App';

describe('Customize component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Customize
      state={App.state}
      features={App.features}
      currencyFormatter={App.USCurrencyFormat}
      updateFeature={App.updateFeature} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

