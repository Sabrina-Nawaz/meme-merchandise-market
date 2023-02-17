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
    // category: [Category],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
