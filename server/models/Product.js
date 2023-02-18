const { Schema, model } = require("mongoose");
const Category = require("./Category");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks/ savedProducts` array in User.js
const productSchema = new Schema(
  {
    productName: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },
    // saved book/product id from GoogleBooks / meme-db
    // productId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    image: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
      ref: 'Category',
      required: true,
    },
  },
  {
    //confirm - the State Activity does not have toJSON
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
