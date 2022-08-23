const express = require("express");
const UserController = require ("./controllers/userController");
const SellerController = require("./controllers/sellerController");
const ProductController = require("./controllers/productController");
const SearchController = require("./controllers/searchController");
const CategoryController = require("./controllers/categoryController");
const LoginController = require("./controllers/loginController");
const Authentication = require("./middlewares/authentication");
const AuthController = require ("./controllers/authController");

const CartController = require("./payments/controllers/cartController");
const TransactionController = require("./payments/controllers/transactionController");

const multer = require("multer");
const uploadConfig= require("./config/upload");
const upload = multer(uploadConfig);

const routes = express.Router();


const userController = UserController();
// USER
routes.post("/user", userController.store);
routes.get("/user", userController.show);
routes.put("/user", userController.update);
routes.get("/login", LoginController.show);

// SELLER
routes.get("/seller/:seller_id", SellerController.show);
routes.post("/seller", SellerController.store );


// PRODUCT
routes.get("/product", ProductController.index);
routes.get("/product/:product_id", ProductController.show);
routes.post("/product/create", upload.single("image"), ProductController.store);
routes.put("/product/:product_id/edit", ProductController.update);
routes.delete("/product/:seller_id/:product_id/delete", ProductController.destroy);

// SEARCH
routes.get("/search", SearchController.index);

// CATEGORY
routes.get("/category/:categoryId", CategoryController.show);

routes.get("/category",CategoryController.index);

routes.post("/category/create", CategoryController.store);

//AUTHENTICATION
routes.get("/auth",Authentication.auth, AuthController.show);


// CART && TRANSACTION

routes.post("/cart", CartController.store);
routes.get("/cart", CartController.index);
routes.get("/cart/:id", CartController.show);
routes.put("/cart/:id", CartController.update);
routes.delete("/cart/:id", CartController.destroy);

routes.post("/transaction", TransactionController.store);
routes.get("/transaction/:id", TransactionController.show);
routes.get("/transaction", TransactionController.index);

module.exports = routes;