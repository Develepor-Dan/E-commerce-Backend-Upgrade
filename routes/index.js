const router = require('express').Router();
const apiRoutes = require('./api');

// Direct any routes starting with '/api' to the apiRoutes
router.use('/api', apiRoutes);

// For any other routes, send a simple HTML response
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
