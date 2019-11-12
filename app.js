const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const userRoute = require('./src/routes/users');
const citiesRoute = require('./src/routes/cities');

const bodyParser = require('body-parser');
const cors = require('cors');

const url = process.env.DB_CONNECTION;
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/cities', citiesRoute);

app.get('/', (req, res) => {
    res.send('My travel app backend v1.1')
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to Database'));

app.listen(port);