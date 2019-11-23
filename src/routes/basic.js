const express = require('express');
const router = express.Router();
const BasicCity = require('../models/BasicCity');


const toUpperFirst = (string) => string[0].toUpperCase() + string.slice(1);

router.get('/', async (req, res) => {
    try {
        const cities = await BasicCity.find();
        res.json(cities)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('/country/:country', async (req, res) => {
    try {
        const cities = await BasicCity.find({
            "country": req.params.country.toUpperCase()
        });
        res.json(cities)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('country/:country/:city', async (req, res) => {
    try {
        const cities = await BasicCity.find({
            "country": req.params.country.toUpperCase(),
            "name": toUpperFirst(req.params.city)
        });
        res.json(cities)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('/city', async (req, res) => {
    try {
        const cities = await BasicCity.findOne({
            "name": req.body.city
        });
        res.json(cities)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;