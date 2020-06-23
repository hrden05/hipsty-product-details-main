import React from 'react';
import axios from 'axios';
import ProductPreDescription from './ProductPreDescription.jsx';
import ProductDescription from './ProductDescription.jsx';
import ShippingAndReturns from './ShippingAndReturns.jsx';
import SellerData from './SellerData.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/api/stores')
      .then((res) => {
        this.setState({
          store: res.data.stores[Math.floor(Math.random() * res.data.stores.length)],
          loading: false,
        });
      });
  }

  render() {
    console.log(this.state.store);
    return (
      <div>
        {this.state.loading
          ? <h1>Loading...</h1>
          : (
            <div>
              <ProductPreDescription store={this.state.store} />
              <ProductDescription store={this.state.store} />
              <ShippingAndReturns store={this.state.store} />
              <SellerData store={this.state.store} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
