import React, { Component } from 'react';
import './App.css';
import Customize from './Customize/Customize';
import Cart from './Cart/Cart';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    console.log('updateFeature called');
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main> 
          <Customize
            state={this.state}
            features={this.props.features}
            currencyFormatter={USCurrencyFormat}
            updateFeature={this.updateFeature}
          />
          <Cart
            state={this.state}
            currencyFormatter={USCurrencyFormat}
            total={USCurrencyFormat.format(total)}
          />
        </main>
      </div>
    );
  }
}

export default App;
