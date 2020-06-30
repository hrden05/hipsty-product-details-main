import React from 'react';
import * as SVG from './svgFiles.jsx';

const ProductPreDescription = (props) => {
  // const randomProduct = Math.floor(Math.random() * props.store.store_products.length);
  const freeShipping = props.product.product_free_shipping;
  const otherShoppers = props.product.product_other_shoppers;
  const lowQuantity = props.product.product_quantity;

  return (
    <div>
      { lowQuantity < 10
        ? <div className='SVGIconsAndText'>
            {SVG.hourglassSVG}
              { lowQuantity === 1
              ?
              <p className='SVGText'>
                <b>Rare find</b> — there&apos;s only {lowQuantity} of these in stock.
              </p>
              :
              <p className='SVGText'>
                <b>Almost gone.</b> There&apos;s only {lowQuantity} left.
              </p>
              }
          </div>
        : ''
      }

      { otherShoppers > 5
        ? <div className='SVGIconsAndText'>
            {SVG.groceryCartSVG}
            <p className='SVGText'>
              <b>Other people want this.</b> Over {otherShoppers - 1} people have this in their carts right now.
            </p>
          </div>
        : ''
      }

      { freeShipping
        ?
        <div className='SVGIconsAndText'>
          {SVG.shippingTruckSVG}
          <p className='SVGText'>
            <b>Horray!</b> This item ships for free to the US.
          </p>
        </div>
        : ''
      }
    </div>
  );
};

export default ProductPreDescription;
