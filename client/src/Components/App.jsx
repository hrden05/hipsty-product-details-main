import React from 'react';
import axios from 'axios';
import HeaderBar from './HeaderBar.jsx';
import ProductPreDescription from './ProductPreDescription.jsx';
import ProductDescription from './ProductDescription.jsx';
import ShippingAndReturns from './ShippingAndReturns.jsx';
import SellerData from './SellerData.jsx';
import { storeWave, preFooterWave, subscribeWave } from './svgFiles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: [],
      product: [],
      loading: true,
    };
  }

  componentDidMount() {
    const randomStore = Math.floor(Math.random() * 100 + 1);
    axios.get('api/joshstore', {
      params: {
        randomStore,
      },
    })
      .then((response) => {
        // const randomStore = Math.floor(Math.random() * res.data.stores.length);
        this.setState({
          store: response.data.stores,
          product: response.data.product,
          loading: false,
        });

      })
      .catch((err) => {
        console.log(err.message)
    });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading... </h1>
    }
    return (
      <div className='body'>
        {/* <div className='headerBar'>Header Section</div>
        <div className='productPictures'>Product Pictures</div>
        <div className='productPurchase'>Product Purchase</div>
        <div className='productReviews'>Product Reviews</div> */}
        <div id='productDescription' className='productDescription'>
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
        {/* <span className='storeInfoRoof'>{storeWave}</span>
        <div className='storeInfo'>storeInfo</div>
        <div className='adsSection'>ads</div>
        <div className='relatedProducts'>Related Products</div>
        <span className='subscribeRoof'>{subscribeWave}</span>
        <div className='subscribe'>Subscribe</div>
        <span className='preFooterRoof'>{preFooterWave}</span>
        <div className='preFooter'>Pre-footer area</div>
        <div className='footerBar'>Footer Section</div> */}
      </div>
    );
  }
}

export default App;
