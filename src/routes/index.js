var express = require('express');
var router = express.Router();

var all_routes_1 = [];
var all_routes_2 = [];
var all_routes_3 = [];
var all_routes_4 = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'citiboard' });
});

router.get('/stations', function(req, res) {
  if (req.query.id == 1)
    res.render('stations', {heading: 'Starting station', station: '1 Ave & E 16 St', numRoutes: '13'});
  else if (req.query.id == 2)
    res.render('stations', {heading: 'Starting station', station: '10 St & 5 Ave', numRoutes: '12'});
  else if (req.query.id == 3)
    res.render('stations', {heading: 'Ending station', station: '6 Ave & Broome St', numRoutes: '146'});
  else if (req.query.id == 4)
    res.render('stations', {heading: 'Ending station', station: 'Division St & Bowery', numRoutes: '115'});
});

router.get('/boards', function(req, res) {
  if (req.query.id == 1)
    res.render('boards', {board: '14530', numUses: '2'});
  else if (req.query.id == 2)
    res.render('boards', {board: '14531', numUses: '6'});
  else if (req.query.id == 3)
    res.render('boards', {board: '14532', numUses: '10'});
  else if (req.query.id == 4)
    res.render('boards', {board: '14533', numUses: '3'});
  else if (req.query.id == 5)
    res.render('boards', {board: '14535', numUses: '7'});
});

module.exports = router;
