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
      image: "shirt1.jpg",
      price: 34.99,
      category: categories[0].categoryName,
      //   quantity: 500,
    },
    {
      productName: "Shiba Inu T-shirt 2",
      description: "Shiba Inu Training",
      image: "shirt2.jpg",
      price: 19.99,
      category: categories[0].categoryName,
      //   quantity: 500,
    },
    {
      productName: "Shiba Inu T-shirt 3E",
      description: "Shiba Silhouette",
      image: "shirt3.jpg",
      price: 14.99,
      category: categories[0].categoryName,
      //   quantity: 20,
    },
    {
      productName: "Shiba Inu T-shirt 4",
      description: "Shiba Inu Silhouette TieDye",
      image: "shirt4.jpg",
      price: 12.99,
      //   quantity: 50,
      category: categories[0].categoryName,
    },
    {
      productName: "Shiba Inu T-shirt 5",
      description: "Shiba Inu Hiragana Eating Udon",
      image: "shirt5.jpg",
      price: 7.99,
      //   quantity: 100,
      category: categories[0].categoryName,
    },
    {
      productName: "Shiba Inu T-shirt 6",
      description: "Shiba Inu Sports",
      image: "shirt6.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[0].categoryName,
    },

    //Category 1: Sweatshirts
    {
      productName: "Shiba Inu Sweatshirt 1",
      description: "Shiba Inu Silohuette Heart",
      image: "sweatshirt1.jpg",
      price: 34.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 2",
      description: "Shiba Inu Sports Nine",
      image: "sweatshirt2.jpg",
      price: 19.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 3",
      description: "Shiba Inu & Girls",
      image: "sweatshirt3.jpg",
      price: 14.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 4",
      description: "Shiba Inu I Was Normal",
      image: "sweatshirt4.jpg",
      price: 12.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 5",
      description: "Shiba Inu Tricolour Friends",
      image: "sweatshirt5.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },
    {
      productName: "Shiba Inu Sweatshirt 6",
      description: "Shiba Inu I Was Normal Purple",
      image: "sweatshirt6.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[1].categoryName,
    },

    //Category 2
    {
      productName: "Shiba Inu Hat 1",
      description: "Shiba Inu Nine Emoji Baseball Cap",
      image: "hat1.jpg",
      price: 34.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 2",
      description: "Shiba Inu Artistic Bucket Hat",
      image: "hat2.jpg",
      price: 19.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },

    {
      productName: "Shiba Inu Hat 3E",
      description: "Shiba Inu Mom Baseball Cap",
      image: "hat3.jpg",
      price: 14.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 4",
      description: "Shiba Inu Sleeping Trucker Hat",
      image: "hat4.jpg",
      price: 12.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 5",
      description: "Shiba Inu Biker Trucker Hat",
      image: "hat5.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu Hat 6",
      description: "Shiba Inu Marmalade Bucket Hat",
      image: "hat6.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },

    //Category 3: Others
    {
      productName: "Shiba Inu T-shirt 1 / Mug Set",
      description: "Shiba Inu Mug Set",
      image: "mug.jpg",
      price: 34.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu T-shirt 2 / Key-ring",
      description: "Shiba Inu Rich Key-ring",
      image: "keyring.jpg",
      price: 19.99,
      //   quantity: 30,
      category: categories[2].categoryName,
    },
    {
      productName: "Shiba Inu T-Shirt 4 / Slippers",
      description: "Shiba Inu Slippers",
      image: "slippers.jpg",
      price: 12.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
    {
      productName: "Shiba Inu Plush3E",
      description: "Shiba Inu Plush Sleeping",
      image: "plush.jpg",
      price: 14.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },
    {
      productName: "Shiba Inu T-shirt 5 / Case",
      description: "Shiba Inu Black Case",
      image: "case.jpg",
      price: 7.99,
      //   quantity: 30,
      category: categories[3].categoryName,
    },

    {
      productName: "Shiba Inu T-shirt 6 / AirPod Case",
      description: "Shiba Inu AirPod Case",
      image: "airpodcase.jpg",
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
