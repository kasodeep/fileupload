const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

/**
 * This function is used to create a product.
 */
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

/**
 * This function is used to get all the created products.
 */
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = { createProduct, getAllProducts };
