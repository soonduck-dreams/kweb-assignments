const { Router } = require('express');
const router = Router();

router.get('/page/:page', (req, res) => {
    res.send(`Welcome to the page #${req.params.page}`);
});

module.exports = router;