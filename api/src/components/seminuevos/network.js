const express = require('express');
const path = require('path');

const router = express.Router();
const validationHandler = require('../../utils/validationHandler');
const { createSeminuevosSchema } = require('../../utils/schemas/seminuevosSchema');
const controller = require('./controller');

router.post('/', validationHandler(createSeminuevosSchema), async (req, res, next) => {
  try {
    // Post car on seminuevos.com
    const post = await controller.postCar(req.body);
    // Chack if post was successful
    if (post === 'success') {
      res.sendFile(path.resolve('src/assets/screenshots', 'screenshot.png'));
    } else {
      res.status(400).json({
        error: 'Data is invalid or seminuevos.com could be failing',
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
