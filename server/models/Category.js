const { Schema, model } = require("mongoose");
const Product = require("./Product");
const User = require("./User");

// This is a subdocument schema,
const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    // categoryId: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Category = model("Category", categorySchema);

module.exports = Category;
