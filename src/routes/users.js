const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/login', async (req, res) => {
    User.findOne({
        nick: req.body.nick
    }, (err, usr) => {
        if (usr === null) {
            return res.status(400).send({
                message: "User not found."
            });
        } else {
            if (usr.validPassword(req.body.password)) {
                return res.status(201).send(usr);
            } else {
                return res.status(400).send({
                    message: "Wrong Password"
                });
            }
        }
    })
});

router.post('/register', async (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        nick: req.body.nick,
        email: req.body.email,
        password: req.body.password
    });
    user.setPassword(req.body.password);

    try {
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (err) {
        res.json({
            message: err
        })
    }

});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

router.get('/nick/:nick', async (req, res) => {
    try {
        const user = await User.findOne({
            nick: req.params.nick
        });
        res.json(user);
    } catch (err) {
        res.json({
            message: err
        })
    }
});


router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({
            _id: req.params.userId
        });
        res.json(removedUser);
    } catch (err) {
        res.json({
            message: err
        })
    }

});

module.exports = router;