const express = require('express');
const router = express.Router();

//login handle
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {

});
router.post('/login', (req, res, next) => {

});

//logout
router.get('/logout', (req, res) => {

});
module.exports = router;