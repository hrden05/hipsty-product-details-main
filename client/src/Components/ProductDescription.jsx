import React from 'react';

const ProductDescription = (props) => {
  const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
  return (
    <div className='descriptionField'>
      <div className='greyText'>Description</div>
      <p>{props.store.store_products[randomProduct].product_description}</p>
    </div>
  );
};

export default ProductDescription;
