const express = require('express');
const cors = require('cors');
const userRoute = require('../routes/user.route');
const productRoute = require('../routes/product.route');
const saleRoute = require('../routes/sale.route');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(productRoute);
app.use(saleRoute);

app.use(express.static('public'));
app.use(errorMiddleware);

module.exports = app;
