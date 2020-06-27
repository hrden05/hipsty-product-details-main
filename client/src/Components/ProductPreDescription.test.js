import React from 'react';
import { shallow } from 'enzyme';
import ProductPreDescription from './ProductPreDescription';

describe('Information before the description (pre-description)', () => {
  const store = {
    _id: '5ef246817883348c575f7cb3',
    store_name: 'Fahey - Gibson',
    store_owner: 'Dominique Mohr',
    store_owner_avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/findingjenny/128.jpg',
    store_country: 'Svalbard & Jan Mayen Islands',
    store_response_time: 63,
    store_id: 1922,
    store_FAQs: [
      {
          "_id": "5ef246817883348c575f7cb9",
          "store_FAQ_question": "Ohh yea, you gotta get schwifty?",
          "store_FAQ_answer": "Every day, once a day, give yourself a present."
      },
      {
          "_id": "5ef246817883348c575f7cba",
          "store_FAQ_question": "Pluto's a planet?",
          "store_FAQ_answer": "Through the darkness of future's past, the magician longs to see. One chants out between two worlds... \"Fire... walk with me.\""
      }
  ],
    store_products: [
      {
        _id: '5ef246817883348c575f7cb5',
        product_name: 'Rustic Metal Gloves',
        product_quantity: 23,
        product_material: 'Ergonomic',
        product_handmade: true,
        product_description: 'Tumblr fixie etsy organic tousled. Marfa gluten-free crucifix actually. Fixie church-key gentrify slow-carb cornhole austin flexitarian. Goth franzen austin. Chia sartorial Thundercats. Normcore listicle tousled post-ironic pop-up you probably havent heard of them. Thundercats chambray post-ironic chicharrones austin.',
        product_free_shipping_amount: 25,
        product_delivery_cost: 'NaN',
        product_free_shipping: false,
        product_deliver_time: 8,
        product_return_policy: 13,
        product_other_shoppers: 2,
      },
      {
        _id: '5ef246817883348c575f7cb6',
        product_name: 'Handcrafted Plastic Shirt',
        product_quantity: 9,
        product_material: 'Handcrafted',
        product_handmade: true,
        product_description: 'Quinoa VHS next level vice lo-fi brooklyn trust fund cray. Cardigan chia meggings knausgaard brunch try-hard bicycle rights normcore. Ugh blue bottle biodiesel wolf. Wes Anderson cronut normcore sartorial microdosing. Bushwick blog polaroid brooklyn drinking.',
        product_free_shipping_amount: 75,
        product_delivery_cost: 'NaN',
        product_free_shipping: false,
        product_deliver_time: 8,
        product_return_policy: 13,
        product_other_shoppers: 36,
      },
      {
        _id: '5ef246817883348c575f7cb7',
        product_name: 'Incredible Frozen Mouse',
        product_quantity: 36,
        product_material: 'Gorgeous',
        product_handmade: true,
        product_description: 'Chartreuse cray helvetica kale chips. Mlkshk beard biodiesel. Tousled slow-carb quinoa distillery beard. Vinyl schlitz pickled bespoke irony chillwave crucifix. Freegan etsy humblebrag offal knausgaard.',
        product_free_shipping_amount: 55,
        product_delivery_cost: 'NaN',
        product_free_shipping: true,
        product_deliver_time: 2,
        product_return_policy: 20,
        product_other_shoppers: 41,
      },
    ],
    __v: 0,
  };

  const wrapper = shallow(<ProductPreDescription store={store} product={store.store_products}/>);

  it('Pre-description renders, with props passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Pre-description has a handmade icon', () => {
    expect(wrapper.find('.greyText')).toBeTruthy();
  });

  it('Pre-description has a handmade icon', () => {
    expect(wrapper.find('SVG.hourglassSVG')).toBeTruthy();
  });

});
