const express = require('express');
const router = express.Router();
const City = require('../models/City');

router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/', async (req, res) => {
    const city = new City({
        basic_info: req.body.basic_info,
        hotels: req.body.hotels,
        foods: req.body.foods,
        events: req.body.events,
        atractions: req.body.atractions,
        comments: req.body.comments,
        grades: req.body.grades
    });

    try {
        const savedCity = await city.save();
        res.json(savedCity)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;