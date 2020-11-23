const express = require('express');

const router = express.Router();
const controller = require('./controller');

router.get('/', async (req, res, next) => {
  try {
    await controller.takeScreenshot();
    res.send('Screenshot taken correctly');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
