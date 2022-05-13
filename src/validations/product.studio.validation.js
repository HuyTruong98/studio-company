const Joi = require('joi');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    categoryId: Joi.string().required(),
    features: Joi.number().required(),
    price: Joi.number().precision(2).required(),
    description: Joi.string().required(),
    imgLogo: Joi.string().required(),
    imgProduct: Joi.array().required(),
  }),
};

const getAllProduct = {
  query: Joi.object().keys({
    name: Joi.string(),
    categoryId: Joi.string(),
    page: Joi.number().integer(),
    limit: Joi.number().integer(),
  }),
};

const getProductId = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      _id: Joi.string().required(),
      name: Joi.string().min(3).max(30),
      categoryId: Joi.string().required(),
      features: Joi.number().required(),
      price: Joi.number().precision(2).required(),
      description: Joi.string().required(),
      imgLogo: Joi.string().required(),
      imgProduct: Joi.array().required(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductId,
  getAllProduct,
};
