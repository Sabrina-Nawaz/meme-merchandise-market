const router = require("express").Router();

const {
  getOneUser,
  createUser,
  login,
  // updateUser,
  //savedProducts, // is this same as addProduct? or is it total savedProducts?
  // addProduct, //not needed?
  deleteProduct,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// Route to GET and POST all users /api/users
router.route("/").post(createUser);

// put authMiddleware anywhere we need to send a token for verification of user
//router.route("/").post(createUser).put(authMiddleware, savedProducts);

router.route("/login").post(login);

// get one user  /api/user/:userId
router.route("/me").get(authMiddleware, getOneUser); // route `me`?
// .put(updateUser) --> if want this feature

router.route("/products/:productId").delete(authMiddleware, deleteProduct);

// DO WE NEED THESE ROUTES BELOW? HOW TO IMPLEMENT
// // api/users/:userId/savedProducts/:productId
// router.route("/:userId/savedProducts/:productId")
//     .post(authMiddleware, addProduct)
//     .delete(authMiddleware, deleteProduct)

module.exports = router;
