const router = require('express').Router();

router.get('/', (req, res) => res.render('home'));
router.get('/home', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;
