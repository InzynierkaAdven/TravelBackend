const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const info = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                additional_info: req.body.additional_info
            }
        });
        res.json(info)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

/////////////////////////////////////deletes

router.delete('/:cityId', async (req, res) => {
    try {
        const info = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                additional_info: {
                    title: req.body.title
                }
            }
        });
        res.json(info)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;