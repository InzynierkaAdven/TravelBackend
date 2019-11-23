const express = require('express');
const app = express();
const mongoose = require('mongoose');
const slug = require('slugify')
require('dotenv/config');

const userRoute = require('./src/routes/users');
const citiesRoute = require('./src/routes/cities');
const basicRoute = require('./src/routes/basic');

const bodyParser = require('body-parser');
const cors = require('cors');

const url = process.env.DB_CONNECTION;
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/cities', citiesRoute);
app.use('/basic', basicRoute);

app.get('/', (req, res) => {
    res.send('My travel app backend v 2.1')
})



mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to Database '));

app.listen(port);