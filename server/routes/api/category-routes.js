const router = require("express").Router();

const {
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
} = require("../../controllers/category-controller");

// Route to GET and POST all categories /api/categories
router.route("/").get(getCategories).post(createCategory);

// Route to GET, PUT, Delete One Category /api/categories/:categoryId
router.route("/:categoryId").get(getOneCategory).put(updateCategory);

module.exports = router;
