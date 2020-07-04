const mongoose = require('mongoose');

// Server Discover and Monitoring engine
mongoose.connect('mongodb://database/etsy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[ [ Connected to database. ] ]'))
  .catch((err) => console.error('error connecting to database', err));

const storeSchema = new mongoose.Schema({
  store_name: String,
  store_owner: String,
  store_owner_avatar: String,
  store_country: String,
  store_response_time: Number,
  store_id: Number,
  store_FAQs: [
    {
      store_FAQ_question: String,
      store_FAQ_answer: String,
    },
  ],
  store_products: [
    {
      product_name: String,
      product_quantity: Number,
      product_material: String,
      product_handmade: Boolean,
      product_description: String,
      product_free_shipping_amount: Number,
      product_delivery_cost: Number,
      product_free_shipping: Boolean,
      product_deliver_time: Number,
      product_return_policy: Number,
      product_other_shoppers: Number,
    },
  ],
});

// compiling schema into a model
const Store = mongoose.model('Store', storeSchema);

module.exports = { Store };

/* ********** GATHERING OF DATA *******
// * "Meet your seller" data at the bottom
// ************* store info *************
// auto incrementing Store ID
faker.name.findName(); // for owner name
faker.commerce.companyName(); // for store name
faker.random.numbr({ min: 0, max: 72 }); // for response time
faker.address.country(); // where the product is shipping from
// store FAQS
Faker.RickAndMorty.quote(); // FAQ Question
Faker.Hacker.saySomethingSmart(); // FAQ Answer

// *************  products *************
// auto incrementing product ID
faker.commerce.productName(); // for store product name
faker.random.number({ min: 0, max: 50 }); // for number of people with item in cart
faker.random.number({ min: 0, max: 50 }); // for free shipping lower limit amount
faker.commerce.productAdjective(); // for product material
Faker.Hipster.paragraphs(3); // for product description
faker.random.number({ min: 15, max: 30 }); // for product delivery cost
faker.random.number({ min: 0, max: 21 }); // for product return policy in days
*********** */
