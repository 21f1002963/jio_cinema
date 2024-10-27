const express = require("express");
const UserRouter = express.Router();
const { getCurrentUser, addToWishlist } = require("../controller/UserController");
const { protectRouteMiddleWare } = require("../controller/AuthController");
/***********routes**************/
/**********users*****/
UserRouter.use(protectRouteMiddleWare);
UserRouter.get("/", getCurrentUser);
UserRouter.post("/wishlist", addToWishlist);

module.exports = UserRouter;
