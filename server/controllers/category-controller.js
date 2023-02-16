// Require the Category model
const { Category, Product } = require("../models");

const categoryController = {
  // To get ALL categories
  getCategories(req, res) {
    Category.find()
      // .populate("products")
      // .sort({ _id: -1 })
      //   .then((dbCategoryData) => res.json(dbCategoryData))
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
  },
  // To get a SINGLE category by id
  getOneCategory({ params }, res) {
    Category.findOne({ _id: params.categoryId })
      .then((category) =>
        !category
          ? res.status(404).json({ message: "No category with that ID" })
          : res.json(category)
      )
      .catch((err) => res.status(500).json(err));
  },

  // // .populate("products")
  // .then((dbCategoryData) => {
  //   if (!dbCategoryData) {
  //     res
  //       .status(404)
  //       .json({ message: "Cannot find a category with this id!" });
  //     return;
  //   }
  //   res.json(dbCategoryData);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   res.sendStatus(400);
  // });

  //Create a category

  createCategory(req, res) {
    Category.create(req.body)
      .then((category) => res.json(category)) //
      .catch((err) => res.status(500).json(err));
  },

  // createCategory(req, res) {
  //   console.log(req.body);
  //   Category.create(req.body)
  //     .then((dbCategoryData) => {
  //       console.log(dbCategoryData);
  //       return Product.findOneAndUpdate(
  //         { _id: req.body.userId },
  //         { $push: { categories: dbCategoryData._id } },
  //         { new: true }
  //       );
  //     })
  //     .then((dbUserData) => {
  //       res.json(dbUserData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
  // // Update a category by id
  updateCategory(req, res) {
    Category.findOneAndUpdate(
      { _id: req.params.categoryId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
    //     .then((dbCategoryData) =>
    //       !dbCategoryData
    //         ? res.status(404).json({ message: "No category found with this id!" })
    //         : res.json(dbCategoryData)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
  },
};

module.exports = categoryController;
