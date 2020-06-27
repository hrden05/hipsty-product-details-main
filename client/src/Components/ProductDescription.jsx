import React from 'react';
import * as SVG from './svgFiles.jsx';

class ProductDescription extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      learnMore: false,
    }

    this.onLearnMore = this.onLearnMore.bind(this);
  }

  onLearnMore() {
    this.setState({
      learnMore: !this.state.learnMore,
    });
  }


  render () {
    // const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
    const handmade = this.props.product.product_handmade;
    return (
      <div className='descriptionField'>
        { handmade
          ? <div className='descriptionFieldExtra'>{SVG.handmadeIconSVG} <span className='greyText' >Handmade</span></div>
          : ''
        }
        <div className='greyText'>Description</div>
        {this.state.learnMore
          ?
            <p className='productDescriptionText productDescriptionTextShow'>
              {this.props.product.product_description}
            </p>
          :
            <p className='productDescriptionText productDescriptionTextHide'>
              {this.props.product.product_description}
            </p>
        }

        <div className='buttonDiv'>
          <button onClick={this.onLearnMore}>
            {this.state.learnMore
            ?
              <span className='buttonText'>
                Less
              </span>
            :
              <span className='buttonText'>
                Learn more about this item
              </span>
            }
          </button>
        </div>
      </div>
    );
  }
};

export default ProductDescription;
