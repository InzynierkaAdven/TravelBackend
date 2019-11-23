const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const atraction = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                atractions: req.body.atractions
            }
        });
        res.json(atraction)
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
            "atractions.name": req.body.name
        }, {
            $push: {
                "atractions.$.comments": {
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
        const grade = await City.updateOne({
            "_id": req.params.cityId,
            "atractions.name": req.body.name
        }, {
            $push: {
                "atractions.$.grades": {
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

router.patch('/setGrades/:cityId', async (req, res) => {
    try {
        const grade = await City.updateOne({
            "_id": req.params.cityId,
            "atractions.name": req.body.name
        }, {
            $set: {
                "atractions.$.grades": {
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
            "atractions.name": req.body.name,
            "atractions.grades.author": req.body.author
        }, {
            "atractions": 1
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
            "atractions.name": req.body.name
        }, {
            $set: {
                "atractions.$.price": {
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
        const atraction = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                atractions: {
                    name: req.body.name
                }
            }
        });
        res.json(atraction)
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
            "atractions.name": req.body.name
        }, {
            $pull: {
                "atractions.$.comments": {
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
            "atractions.name": req.body.name
        }, {
            $pull: {
                "atractions.$.grades": {
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
            "atractions.name": req.body.name
        }, {
            $unset: {
                "atractions.$.price": {
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