const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const attraction = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                attractions: req.body.attractions
            }
        });
        res.json(attraction)
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
            "attractions.name": req.body.name
        }, {
            $push: {
                "attractions.$.comments": {
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

router.patch('/grades/:cityId', async (req, res) => {
    try {
        const grade = await City.updateOne({
            "_id": req.params.cityId,
            "attractions.name": req.body.name
        }, {
            $push: {
                "attractions.$.grades": {
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

router.patch('/price/:cityId', async (req, res) => {
    try {
        const price = await City.updateOne({
            "_id": req.params.cityId,
            "attractions.name": req.body.name
        }, {
            $set: {
                "attractions.$.price": {
                    amount: req.body.amount,
                    currency: req.body.currency
                }
            }
        });
        res.json(price)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

/////////////////////////////////////deletes

router.delete('/:cityId', async (req, res) => {
    try {
        const attraction = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                attractions: {
                    name: req.body.name
                }
            }
        });
        res.json(attraction)
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
            "attractions.name": req.body.name
        }, {
            $pull: {
                "attractions.$.comments": {
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
        const grade = await City.updateOne({
            "_id": req.params.cityId,
            "attractions.name": req.body.name
        }, {
            $pull: {
                "attractions.$.grades": {
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

router.delete('/price/:cityId', async (req, res) => {
    try {
        const price = await City.updateOne({
            "_id": req.params.cityId,
            "attractions.name": req.body.name
        }, {
            $unset: {
                "attractions.$.price": {
                    amount: "",
                    currency: ""
                }
            }
        });
        res.json(price)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;