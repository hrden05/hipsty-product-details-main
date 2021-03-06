const faker = require('faker');
const { Faker } = require('fakergem');
const db = require('../database/index.js');

// delete the previous data from database so as to not overload it
db.Store.deleteMany()
  .then((data) => console.log(`Store database cleared - Deleted ${data.deletedCount} entries.`))
  .catch((err) => console.error(`Unable to clear database, error: ${err.message}.`));

/* ************ seed data for 100 stores ************ */
const stores = [];
for (let i = 1; i <= 100; i += 1) {
  // make some store FAQs
  const storeFAQs = [];
  const numberOfFAQs = Math.floor(Math.random() * 5);
  for (let j = 0; j < numberOfFAQs; j += 1) {
    const newFAQ = {
      store_FAQ_question: Faker.Hipster.words(3).join(' ').concat('?'),
      store_FAQ_answer: Faker.Matz.quote(),
    };
    // all each generated FAQs to array (for db)
    storeFAQs.push(newFAQ);
  }

  // make a bunch of products from the store
  const storeProducts = [];
  const numberOfProducts = Math.floor(Math.random() * 9 + 1);
  for (let j = 1; j <= numberOfProducts; j += 1) {
    const newProduct = {
      product_id: faker.random.number({ min: 1, max: 100 }),
      product_name: faker.commerce.productName(),
      product_quantity: faker.random.number({ min: 0, max: 50 }),
      product_material: faker.commerce.productAdjective(),
      product_handmade: faker.random.boolean(),
      product_description: Faker.Hipster.paragraph(50),
      product_free_shipping_amount: faker.random.number({ min: 5, max: 20 }) * 5,
      product_delivery_cost: Faker.Commerce.price({ min: 1000, max: 3000}), //this is in cents
      product_free_shipping: faker.random.boolean(),
      product_deliver_time: faker.random.number({ min: 2, max: 10 }),
      product_return_policy: faker.random.number({ min: 0, max: 21 }),
      product_other_shoppers: faker.random.number({ min: 0, max: 50 }),
    };
    // all each generated proudct to array (for db)
    storeProducts.push(newProduct);
  }

  // for all of store data
  const storeAll = {
    store_id: i,
    store_name: faker.company.companyName(),
    store_owner: Faker.Name.name(),
    store_owner_avatar: faker.image.avatar(),
    store_country: Faker.Address.country(),
    store_response_time: faker.random.number({ min: 0, max: 72 }),
    store_FAQs: storeFAQs,
    store_products: storeProducts,
  };
  // add each store data created to array (for db)
  stores.push(storeAll);
}

// add all generated data to the 'Store' database
db.Store.insertMany(stores)
  .then(() => console.log(`Created ${stores.length} new seeds, planted into 'Store' database.`))
  .catch((err) => console.error(`Error seeding data to Store database: ${err.message}.`))
  .finally(() => {
    console.log('Exiting seed script...');
    process.exit();
  });
