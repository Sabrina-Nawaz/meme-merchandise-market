// Sets Express Router
const router = require("express").Router();

// Establish routes for user and category routes
const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes"); //need?
const categoryRoutes = require("./category-routes");

//router.use("/users", userRoutes);
router.use("/products", productRoutes); // need?
// router.use("/categories", categoryRoutes);

module.exports = router;
