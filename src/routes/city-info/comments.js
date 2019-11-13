const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const comment = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                comments: req.body.comments
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
        const comment = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                comments: req.body.comments
            }
        });
        res.json(comment)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;