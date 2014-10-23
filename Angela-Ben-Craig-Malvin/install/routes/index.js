var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/blockquote', function(req, res) {
  res.render('blockquote', { title: 'Express' });
});

router.get('/buttons', function(req, res) {
  res.render('buttons', { title: 'Express' });
});

router.get('/checkradio', function(req, res) {
  res.render('checkradio', { title: 'Express' });
});

router.get('/colors', function(req, res) {
  res.render('colors', { title: 'Express' });
});

router.get('/fonts', function(req, res) {
  res.render('fonts', { title: 'Express' });
});

router.get('/error', function(req, res) {
  res.render('error', { title: 'Express' });
});

router.get('/headings', function(req, res) {
  res.render('headings', { title: 'Express' });
});

router.get('/icons', function(req, res) {
  res.render('icons', { title: 'Express' });
});

router.get('/images', function(req, res) {
  res.render('images', { title: 'Express' });
});

router.get('/inline', function(req, res) {
  res.render('inline', { title: 'Express' });
});

router.get('/inputfields', function(req, res) {
  res.render('inputfields', { title: 'Express' });
});

router.get('/lists', function(req, res) {
  res.render('lists', { title: 'Express' });
});

router.get('/paragraph', function(req, res) {
  res.render('paragraph', { title: 'Express' });
});

module.exports = router;

