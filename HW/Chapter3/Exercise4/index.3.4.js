const express = require('express');

const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('login.pug');
});

app.post('/login', (req, res) => {
    res.send(`${req.body.username}님의 비밀번호: ${req.body.password}`);
});