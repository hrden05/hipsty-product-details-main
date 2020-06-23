import React from 'react';
import * as SVG from './svgFiles.jsx';

const ProductPreDescription = (props) => {
  const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
  const handmade = props.store.store_products[randomProduct].product_handmade;
  const freeShipping = props.store.store_products[randomProduct].product_free_shipping;
  const otherShoppers = props.store.store_products[randomProduct].product_other_shoppers;
  const lowQuantity = props.store.store_products[randomProduct].product_quantity;

  return (
    <div>
      { lowQuantity < 10 ? <p className='SVGIconsAndText'>{SVG.hourglassSVG} <b>Almost gone.</b> There&apos;s only {lowQuantity} left.</p> : '' }
      { otherShoppers > 2 ? <p className='SVGIconsAndText'>{SVG.groceryCartSVG} <b>Other people want this.</b> Over {otherShoppers - 1} people have this in their carts right now. </p> : '' }
      { freeShipping ? <p className='SVGIconsAndText'>{SVG.shippingTruckSVG} <b>Horray!</b> This item ships for free to the US.</p> : '' }
      { handmade ? <p className='greyText'>{SVG.handmadeIconSVG} Handmade</p> : '' }
    </div>
  );
};

export default ProductPreDescription;
