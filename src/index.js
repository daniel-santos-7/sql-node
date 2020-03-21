const express = require('express');
const router = require('./router');
require('./database');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333);