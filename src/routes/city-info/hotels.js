const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const hotel = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                hotels: req.body.hotels
            }
        });
        res.json(hotel)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/com/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $push: {
                "hotels.$.comments": {
                    author: req.body.author,
                    content: req.body.content
                }
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/addGrades/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $push: {
                "hotels.$.grades": {
                    author: req.body.author,
                    rate: req.body.rate
                }
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/setGrades/:cityId', async (req, res) => {
    try {
        const grade = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $set: {
                "hotels.$.grades": {
                    author: req.body.author,
                    rate: req.body.rate
                }
            }
        });
        res.json(grade)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.get('/checkGrades/:cityId', async (req, res) => {
    try {
        const grade = await City.find({
            "_id": req.params.cityId,
            "hotels.name": req.body.name,
            "hotels.grades.author": req.body.author
        }, {
            "hotels": 1
        });
        res.json(grade)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.patch('/price/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $set: {
                "hotels.$.avg_price": {
                    amount: req.body.amount,
                    currency: req.body.currency
                }
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

/////////////////////////////////////deletes

router.delete('/:cityId', async (req, res) => {
    try {
        const hotel = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                hotels: {
                    name: req.body.name
                }
            }
        });
        res.json(hotel)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

router.delete('/com/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $pull: {
                "hotels.$.comments": {
                    author: req.body.author,
                    content: req.body.content
                }
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/grades/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $pull: {
                "hotels.$.grades": {
                    author: req.body.author,
                    rate: req.body.rate
                }
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/price/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "hotels.name": req.body.name
        }, {
            $unset: {
                "hotels.$.avg_price": {
                    amount: "",
                    currency: ""
                }
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;