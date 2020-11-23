const seminuevos = require('../components/seminuevos/network');

const routes = (app) => {
  app.use('/api/seminuevos', seminuevos);
};

module.exports = routes;
