var express = require('express');
var router = express.Router();

const { authenticateToken } = require('../middlewares/auth')

router.post('/test', authenticateToken, function(req, res, next) {
  res.json({ hello: 'Express' });
});

router.post('/predict', authenticateToken, function(req, res, next) {
    res.json({ hello: 'predict here' });
});

router.post('/submit', authenticateToken, function(req, res, next) {
    res.json({ hello: 'submit here' });
});

module.exports = router;
