const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const food = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                foods: req.body.foods
            }
        });
        res.json(food)
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
            "foods.name": req.body.name
        }, {
            $push: {
                "foods.$.comments": {
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
        const comment = await City.updateOne({
            "_id": req.params.cityId,
            "foods.name": req.body.name
        }, {
            $push: {
                "foods.$.grades": {
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


/////////////////////////////////////deletes

router.delete('/:cityId', async (req, res) => {
    try {
        const food = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                foods: {
                    name: req.body.name
                }
            }
        });
        res.json(food)
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
            "foods.name": req.body.name
        }, {
            $pull: {
                "foods.$.comments": {
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
            "foods.name": req.body.name
        }, {
            $pull: {
                "foods.$.grades": {
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

module.exports = router;