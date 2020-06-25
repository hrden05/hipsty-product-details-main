import React from 'react';
import * as SVG from './svgFiles.jsx';

const ProductDescription = (props) => {
  // const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
  const handmade = props.product.product_handmade;
  return (
    <div className='descriptionField'>
      { handmade
        ? <div className='descriptionFieldExtra'>{SVG.handmadeIconSVG} <span className='greyText ' >Handmade</span></div>
        : ''
      }
      <div className='greyText'>Description</div>
      <p className='productDescriptionText'>{props.product.product_description}</p>
    </div>
  );
};

export default ProductDescription;
