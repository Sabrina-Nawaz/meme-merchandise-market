const { Schema } = require('mongoose');
const categorySchema = require('./Category');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const productSchema = new Schema({
  productName: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  productId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  categoryId: {
    type: String,
    required: true,
  },
});

module.exports = productSchema;
