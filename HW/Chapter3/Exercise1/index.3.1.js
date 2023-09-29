const express = require('express');
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
const toString = obj => Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send(toString(req.query));
});

app.post('/', (req, res) => {
    res.send(toString(req.body));
});

app.put('/', (req, res) => {
    res.send(toString(req.body));
});

app.delete('/', (req, res) => {
    res.send(toString(req.body));
});