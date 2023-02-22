// Require the User model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

const userController = {
  // To get a SINGLE user by ID
  getOneUser({ params }, res) {
    User.findOne({ _id: params.id })
      .populate("products")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "Cannot find user with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // Create a user
  createUser(req, res) {
    console.log(req.body);
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  //Update a user
  updateUser(req, res) {
    console.log(req.params);
    User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
      .then((dbUserData) =>
        !dbUserData ? res.status(404).json({ message: "No user with this id!" }) : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Delete a user and products
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: "No user with that ID" })
          : Product.deleteMany({ _id: { $in: product.user } })
      )
      .then(() => res.json({ message: "User and products deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Create/add product
  async addProduct({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedProducts: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a product from `savedBooks`/ `savedProducts`
  async deleteProduct({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedProducts: { productId: params.productId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },

  //TEST
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  async saveProduct({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedProducts: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
};

module.exports = userController;
