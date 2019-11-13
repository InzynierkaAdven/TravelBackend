const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const event = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                events: req.body.events
            }
        });
        res.json(event)
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
            "events.name": req.body.name
        }, {
            $push: {
                "events.$.comments": {
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

router.patch('/price/:cityId', async (req, res) => {
    try {
        const price = await City.updateOne({
            "_id": req.params.cityId,
            "events.name": req.body.name
        }, {
            $set: {
                "events.$.price": {
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
        const event = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                events: {
                    name: req.body.name
                }
            }
        });
        res.json(event)
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
            "events.name": req.body.name
        }, {
            $pull: {
                "events.$.comments": {
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

router.delete('/price/:cityId', async (req, res) => {
    try {
        const price = await City.updateOne({
            "_id": req.params.cityId,
            "events.name": req.body.name
        }, {
            $unset: {
                "events.$.price": {
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