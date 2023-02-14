const router = require("express").Router();

const {
  getOneUser,
  createUser,
  updateUser,
  addProduct,
  deleteProduct,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// Route to GET and POST all users /api/users
router.route("/").get(getUsers).post(createUser);

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, savedProducts);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/books/:bookId").delete(authMiddleware, deleteBook);

module.exports = router;
