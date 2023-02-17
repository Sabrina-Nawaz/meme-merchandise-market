// Require the Product model
const { Product, User } = require("../models");

const productController = {
  // To GET ALL products
  getProducts(req, res) {
    Product.find()
      //   .populate("products")
      //   .sort({ _id: -1 })
      //   .then((dbCategoryData) => res.json(dbCategoryData))
      .then((products) => res.json(products)) // Q: when to use dbProductData?
      .catch((err) => res.status(500).json(err)); // how to add sort?
  },
  // To GET ONE product by id
  getOneProduct(req, res) {
    Product.findOne({ _id: req.params.productId})
      .then((product) =>
        !product
          ? res.status(404).json({ message: "No product with that ID" })
          : res.json(product)
      )
      .catch((err) => res.status(500).json(err));
  },

  // To create(POST) a new product
  createProduct(req, res) {
    Product.create(req.body)
      .then((user) => res.json(user)) //
      .catch((err) => res.status(500).json(err));
  },

  // To update(PUT) a product
  updateProduct(req, res) {
    Product.findOneAndUpdate(
      { _id: req.params.productId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = productController;
