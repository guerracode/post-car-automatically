const joi = require('joi');

// Schema to validate the data received
const createSeminuevosSchema = joi.object({
  price: joi.number().required(),
  description: joi.string().required(),
});

module.exports = {
  createSeminuevosSchema,
};
