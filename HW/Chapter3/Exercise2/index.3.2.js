const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use('/board', router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});