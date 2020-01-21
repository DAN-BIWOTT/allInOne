const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const betaRoutes = require('./routes/articleRoute');

// MIDDLE-WARE
app.use(bodyParser.json());
app.use('/', betaRoutes);

app.listen(4000);