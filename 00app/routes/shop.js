const express = require('express');

const router = express.Router();

router.get('/product', (req, res, next) => {
    res.send('<h1>HI! Now you are in Home Page!</h1>')
});


module.exports = router;