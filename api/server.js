const express = require('express');
const cors = require('cors') 

const app = express();

const router = require('./src/routes/routes');
const config = require('./src/config/config');
const { logErrors, errorHandler, wrapErrors } = require('./src/utils/errorHandler');
const notFoundHandler = require('./src/utils/notFoundHandler');

const { port } = config;

app.use(cors())

// server config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
router(app);

//  Catch 404
app.use(notFoundHandler);

//  Error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on: http://localhost:${port}`);
});
