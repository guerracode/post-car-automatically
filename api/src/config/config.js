require('dotenv').config();

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  seminuevos: {
    email: process.env.SEMINUEVOS_EMAIL,
    password: process.env.SEMINUEVOS_PASS,
  },
};
