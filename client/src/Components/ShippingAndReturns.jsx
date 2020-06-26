import React from 'react';
import ProductPreDescription from './ProductPreDescription.jsx';

const ShippingAndReturns = (props) => {
  // const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
  const shippingTime = props.product.product_deliver_time;
  const freeShipping = props.product.product_free_shipping;
  const shippingCost = props.product.product_delivery_cost/100;

  console.log(ProductPreDescription.freeShipping);
  return (
    <div className='shippingInfo'>
      <div className='shippingInfoItem'>
        <span>Ready to ship in</span>
        <p className='shippingInfoValues'>{shippingTime - 1}-{shippingTime + 1} business days</p>
      </div>
      <div className='shippingInfoItem'>
        <span>From</span>
        <p className='shippingInfoValues'>{props.store.store_country}</p>
      </div>
      <div className='shippingInfoItem'>
        <span>Cost to ship</span>
        {freeShipping
        ?
          <p className='shippingInfoValues'>Free</p>
        :
          <p className='shippingInfoValues'>${shippingCost}</p>
        }
      </div>
    </div>
  );
};

export default ShippingAndReturns;
