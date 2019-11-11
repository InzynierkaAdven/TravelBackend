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

//TODO
app.use('/cities', citiesRoute);

app.get('/', (req, res) => {
    res.send('My travell app backend v1.0')
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to DB! :D'));

app.listen(port);