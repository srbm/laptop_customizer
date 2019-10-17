import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Cart from './Cart';

describe('Cart component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cart
            state={App.state}
            currencyFormatter={App.USCurrencyFormat}
            total={'$100'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});