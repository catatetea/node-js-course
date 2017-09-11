const express = require('express');
const app = express();
const port = 3000;

const router = require('./routers/router');

app.use(express.static(`${__dirname}/public`));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server run on ${port} port`);
});