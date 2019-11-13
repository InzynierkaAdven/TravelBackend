const express = require('express');
const router = express.Router();
const City = require('../models/City');

const hotelInfo = require('./city-info/hotels');
const commentsInfo = require('./city-info/comments');
const gradesInfo = require('./city-info/grades');
const additionalInfo = require('./city-info/additionalInfo');
const foodInfo = require('./city-info/food');
const attractionsInfo = require('./city-info/attractions');
const eventsInfo = require('./city-info/events');

router.use('/hotels', hotelInfo);
router.use('/comment', commentsInfo);
router.use('/rate', gradesInfo);
router.use('/info', additionalInfo);
router.use('/food', foodInfo);
router.use('/attraction', attractionsInfo); ///need to test it
router.use('/event', eventsInfo); ///need to test it

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

///how to get it by params ???
router.get('/:city', async (req, res) => {
    try {
        const cities = await City.findOne({
            "basic_info.city": req.body.city
        });
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
        grades: req.body.grades,
        additional_info: req.body.additional_info
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