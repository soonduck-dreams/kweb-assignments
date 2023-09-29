const express = require('express');

const app = express();
const port = 3000;

const factorial = function f(n) {
    if (n <= 2) return n;
    return n * f(n - 1);
};

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/factorial', (req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
});

app.get('/factorial/:number', (req, res) => {
    const result = factorial(parseInt(req.params.number));
    res.send('' + result);
});