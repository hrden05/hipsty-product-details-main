const faker = require('faker');
const { Faker } = require('fakergem');
const mongoose = require('mongoose');

// where's the database running?
const dbUrl = ('mongodb://localhost:27017');

// database name that was created
const dbName = 'Store';

// Connect to the DB server
mongoose.connect(dbUrl => {
  const db = client.db(dbName);

  // acceess to relevant collection
  const storeCollection = db.collection('Store');

  // seed data for 100 stores
  const stores = [];
  for (let i = 0; i < 100; i += 1) {
    // make some store FAQs
    const storeFAQs = [];
    const numberOfFAQs = Math.floor(Math.random() * 5);
    for (let j = 0; j < numberOfFAQs; j += 1) {
      const newFAQ = {
        store_FAQ_question: Faker.RickAndMorty.quote().split('.')[0].concat('?'),
        store_FAQ_answer: Faker.Hacker.saySomethingSmart(),
      };
      storeFAQs.push(newFAQ);
    }

    // make a bunch of store products
    const storeProducts = [];
    const numberOfProducts = Math.floor(Math.random() * 9 + 1);
    for (let j = 0; j < numberOfProducts; j += 1) {
      const newProduct = {
        product_name: faker.commerce.productName(),
        product_quantity: faker.random.number({ min: 0, max: 50 }),
        product_material: faker.commerce.productAdjective(),
        product_description: Faker.Hipster.paragraphs(3),
        product_free_shipping_amount: faker.random.number({ min: 5, max: 20 }) * 5,
        product_delivery_cost: faker.random.number({ min: 10, max: 30 }),
        product_deliver_time: faker.random.number({ min: 2, max: 14 }),
        product_return_policy: faker.random.number({ min: 0, max: 21 }),
        product_other_shoppers: faker.random.number({ min: 0, max: 50 }),
      };
      storeProducts.push(newProduct);
    }

    // for all of store data
    const storeAll = {
      store_name: faker.commerce.companyName(),
      store_owner: faker.name.findName(),
      store_country: faker.address.country(),
      store_response_time: faker.random.numbr({ min: 0, max: 72 }),
      store_id: faker.random.numbr({ min: 0, max: 10000 }),
      store_FAQs: storeFAQs,
      store_products: storeProducts,
    };

    // add each store data created to array (for db)
    stores.push(storeAll);
  }

  // add to the store database
  storeCollection.insertMany(stores);
  client.close(); // end
});
