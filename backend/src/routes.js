const express = require("express");
const UserController = require ("./controllers/userController");
const SellerController = require("./controllers/sellerController");
const ProductController = require("./controllers/productController");
const SearchController = require("./controllers/searchController");
const CategoryController = require("./controllers/categoryController");

const routes = express.Router();

// USER
routes.post("/", UserController.store);
routes.get("/user", UserController.show);
routes.put("/user", UserController.update);

// SELLER
routes.get("/seller/:seller_id", SellerController.show);
routes.post("/seller", SellerController.store );


// PRODUCT
routes.get("/product", ProductController.index);
routes.get("/product/:product_id", ProductController.show);
routes.post("/product/create", ProductController.store);
routes.put("/product/:product_id/edit", ProductController.update);
routes.delete("/product/:seller_id/:product_id/delete", ProductController.destroy);

// SEARCH
routes.get("/search", SearchController.index);

// CATEGORY
routes.get("/category/:categoryId", CategoryController.show);

routes.get("/category",CategoryController.index);

routes.post("/category/create", CategoryController.store);




module.exports = routes;