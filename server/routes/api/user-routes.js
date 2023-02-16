const router = require("express").Router();

const {
  getOneUser,
  createUser,
  // updateUser,
  addProduct,
  // addP, //not needed?
  deleteProduct,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// Route to GET and POST all users /api/users
router
  .route("/")
  // .get(getUsers)
  .post(createUser);

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, addProduct);

// router.route("/login").post(login);

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
