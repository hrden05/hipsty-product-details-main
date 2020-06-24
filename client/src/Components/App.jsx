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
      store: this.props.store || [],
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
      })
      .catch((err) => err.message);
  }

  render() {
    return (
      <div>
        {this.state.loading
          ? <h1>Loading...</h1>
          : (
            <div>
              <div><ProductPreDescription store={this.state.store} /></div>
              <div><ProductDescription store={this.state.store} /></div>
              <div><ShippingAndReturns store={this.state.store} /></div>
              <div><SellerData store={this.state.store} /></div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
