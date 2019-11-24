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
router.post('/', async (req, res) => {
    const city = new BasicCity({
        name: req.body.name,
        country: req.body.country,
        lat: req.body.lat,
        lng: req.body.lng
    });

    try {
        const savedCity = await city.save();
        res.json(savedCity)
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

router.get('/city/:cityId', async (req, res) => {
    try {
        const cities = await BasicCity.findOne({
            "_id": req.params.cityId
        });
        res.json(cities)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;