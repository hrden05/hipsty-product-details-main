import React from 'react';

const ShippingAndReturns = (props) => {
  const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
  const shippingTime = props.store.store_products[randomProduct].product_deliver_time;

  return (
    <div className='shippingInfo'>
      Ready to ship in
      <div className='shippingInfoValues'>{shippingTime - 1}-{shippingTime + 1} business days</div>
      From <div className='shippingInfoValues'>{props.store.store_country}</div>
    </div>
  );
};

export default ShippingAndReturns;
