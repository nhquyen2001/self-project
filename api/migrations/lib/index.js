const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

exports.COLLECTION = {
  PRODUCT: 'products',
  USER: 'users',
};

exports.DB = mongoose.connection;

exports.hashPassword = async (password, rounds) => {
  return await bcrypt.hash(password, rounds);
};
