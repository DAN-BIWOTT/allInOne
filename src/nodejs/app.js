const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const betaRoutes = require('./routes/articleRoute');
const cors = require('cors')

// MIDDLE-WARE
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use('/', betaRoutes);

app.listen(4000);