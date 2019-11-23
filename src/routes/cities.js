const express = require('express');
const router = express.Router();
const City = require('../models/City');
const BasicCity = require('../models/BasicCity');

const hotelInfo = require('./city-info/hotels');
const commentsInfo = require('./city-info/comments');
const gradesInfo = require('./city-info/grades');
const additionalInfo = require('./city-info/additionalInfo');
const foodInfo = require('./city-info/food');
const atractionsInfo = require('./city-info/atractions');
const eventsInfo = require('./city-info/events');

router.use('/hotels', hotelInfo);
router.use('/comment', commentsInfo);
router.use('/rate', gradesInfo);
router.use('/info', additionalInfo);
router.use('/food', foodInfo);
router.use('/atraction', atractionsInfo);
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

router.post('/basic', async (req, res) => {
    const city = new BasicCity({
        country: req.body.country,
        name: req.body.name,
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

});

router.post('/', async (req, res) => {
    const city = new City({
        slug: req.body.slug,
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