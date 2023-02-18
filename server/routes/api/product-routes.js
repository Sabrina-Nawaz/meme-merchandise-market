const router = require("express").Router();

const {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/product-controller");

// Route to GET and POST all products /api/products
router.route("/").get(getProducts).post(createProduct);

// Route to GET, PUT One Product /api/products/:productId
router
  .route("/:productId")
  .get(getOneProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;

// did not add route for delete product yet as may not need
