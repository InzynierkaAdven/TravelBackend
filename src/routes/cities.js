const express = require('express');
const router = express.Router();
const City = require('../models/City');
const CityDB = require('../models/CityDB');
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
            "_id": req.params.city
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
        city: req.body.city,
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

router.patch('/', async (req, res) => {
    try {
        const city = await CityDB.updateOne({
            "_id": "5ddaee7629e6e581705b5198"
        }, {
            $push: {
                hotels: req.body.hotels,
                foods: req.body.foods,
                events: req.body.events,
                atractions: req.body.atractions,
                comments: req.body.comments,
                grades: req.body.grades,
                additional_info: req.body.additional_info
            }
        });
        res.json(city)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;