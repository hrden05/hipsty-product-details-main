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
      product: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/api/stores')
      .then((res) => {
        const randomStore = Math.floor(Math.random() * res.data.stores.length);
        this.setState({
          store: res.data.stores[randomStore],
          product: res.data.stores[randomStore].store_products[Math.floor(Math.random() * res.data.stores[randomStore].store_products.length)],
          loading: false,
        });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div>
        {this.state.loading
          ? <h1>Loading...</h1>
          : (<div className='body'>
              <div className='headerBar'>Header Section</div>
              <div className='productPictures'>Product Pictures</div>
              <div className='productPurchase'>Product Purchase</div>
              <div className='productReviews'>Product Reviews</div>
              <div className='productDescription'>
                <div>
                  <ProductPreDescription store={this.state.store} product={this.state.product} />
                </div>
                <div>
                  <ProductDescription store={this.state.store} product={this.state.product} />
                </div>
                <div>
                  <ShippingAndReturns store={this.state.store} product={this.state.product} />
                </div>
                <div><SellerData store={this.state.store} /></div>
              </div>
              <div className='storeInfo'>storeInfo</div>
              <div className='adsSection'>ads</div>
              <div className='relatedProducts'>Related Products</div>
              <div className='footerBar'>Footer Section</div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
