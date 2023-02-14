// Sets Express Router
const router = require("express").Router();

// Establish routes for user and thought routes
const userRoutes = require("./user-routes");
const categoryRoutes = require("./category-routes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
