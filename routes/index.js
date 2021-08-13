var express = require('express');
var router = express.Router();

const { authenticateToken } = require('../middlewares/auth')

/* GET home page. */
router.get('/', authenticateToken, function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/test', authenticateToken, function(req, res, next) {
  res.json({ hello: 'Express' });
});

module.exports = router;
