const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.patch('/:cityId', async (req, res) => {
    try {
        const grade = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $push: {
                grades: req.body.grades
            }
        });
        res.json(grade)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

/////////////////////////////////////deletes

router.delete('/:cityId', async (req, res) => {
    try {
        const grade = await City.updateOne({
            "_id": req.params.cityId
        }, {
            $pull: {
                grades: req.body.grades
            }
        });
        res.json(grade)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;