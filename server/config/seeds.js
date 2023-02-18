const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { categoryName: "Shirts", description: "T-Shirts" },
    { categoryName: "Sweatshirts", description: "Sweatshirts" },
    { categoryName: "Hats", description: "Hats" },
    { categoryName: "Others", description: "Others" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  //Category 0: Shirts
  const products = await Product.insertMany([
    {
      productName: "Shiba Inu T-shirt 1",
      description: "Shiba Inu Eating Udon",
      image: "shirt-1.jpg",
      price: 34.99,
      category: categories[0].categoryName,
      //   quantity: 500,
    },
    {
      productName: "Shiba Inu T-shirt 2",
      description: "Shiba Inu Training",
      image: "shirt-2.jpg",
      price: 19.99,
      category: categories[0].categoryName,
      //   quantity: 500,
    },
    {
      productName: "Shiba Inu T-shirt 3E",
      description: "Shiba Silhouette",
      image: "shirt-3.jpg",
      price: 14.99,
      category: categories[0].categoryName,
      //   quantity: 20,
    },
    {
      productName: "Shiba Inu T-shirt 4",
      description: "Shiba Inu Silhouette TieDye",
      image: "shirt-4.jpg",
      price: 12.99,
      //   quantity: 50,
      category: categories[0].categoryName,
    },
    {
      productName: "Shiba Inu T-shirt 5",
      description: "Shiba Inu Hiragana Eating Udon",
      image: "shirt-5.jpg",
      price: 7.99,
      //   quantity: 100,
      category: categories[0].categoryName,
    },
    {
      productName: "Shiba Inu T-shirt 6",
      description: "Shiba Inu Sports",
      image: "shirt-6.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[0].categoryName,
    },

    //Category 1: Sweatshirts
    {
      productName: "Shiba Inu Sweatshirt 1",
      description: "Shiba Inu Silohuette Heart",
      image: "Sweatshirts-1.jpg",
      price: 34.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 2",
      description: "Shiba Inu Sports Nine",
      image: "Sweatshirts-2.jpg",
      price: 19.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 3",
      description: "Shiba Inu & Girls",
      image: "Sweatshirts-3.jpg",
      price: 14.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 4",
      description: "Shiba Inu I Was Normal",
      image: "Sweatshirts-4.jpg",
      price: 12.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 5",
      description: "Shiba Inu Tricolour Friends",
      image: "Sweatshirts-5.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 6",
      description: "Shiba Inu I Was Normal Purple",
      image: "Sweatshirts-6.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },

    //Category 2 - Hats
    {
      productName: "Shiba Inu Hat 1",
      description: "Shiba Inu Nine Emoji Baseball Cap",
      image: "Hat-1.jpg",
      price: 34.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 2",
      description: "Shiba Inu Artistic Bucket Hat",
      image: "Hat-2.jpg",
      price: 19.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },

    {
      productName: "Shiba Inu Hat 3E",
      description: "Shiba Inu Mom Baseball Cap",
      image: "Hat-3.jpg",
      price: 14.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 4",
      description: "Shiba Inu Sleeping Trucker Hat",
      image: "Hat-4.jpg",
      price: 12.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 5",
      description: "Shiba Inu Biker Trucker Hat",
      image: "Hat-5.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 6",
      description: "Shiba Inu Marmalade Bucket Hat",
      image: "Hat-6.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },

    //Category 3: Others
    {
      productName: "Shiba Inu Mug Set",
      description: "Shiba Inu Mug Set",
      image: "Shiba-merch-1.jpg",
      price: 34.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
    {
      productName: "Shiba Inu Key-ring",
      description: "Shiba Inu Rich Key-ring",
      image: "Shiba-merch-2.jpg",
      price: 19.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
    {
      productName: "Shiba Inu Slippers",
      description: "Shiba Inu Slippers",
      image: "Shiba-merch-3.jpg",
      price: 12.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
    {
      productName: "Shiba Inu Plush3E",
      description: "Shiba Inu Plush Sleeping",
      image: "Shiba-merch-4.jpg",
      price: 14.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
    {
      productName: "Shiba Inu Case",
      description: "Shiba Inu Black Case",
      image: "Shiba-merch-5.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },

    {
      productName: "Shiba Inu AirPod Case",
      description: "Shiba Inu AirPod Case",
      image: "Shiba-merch-6.jpg",
      price: 3.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    username: "Pamela",
    // lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    // orders: [
    //   {
    //     products: [products[0]._id, products[0]._id, products[1]._id],// savedProducts
    //   },
    // ],
  });

  await User.create({
    username: "Elijah",
    // lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
