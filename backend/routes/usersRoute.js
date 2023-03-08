const router = require('express').Router();
const user = require('../models/userModel');
const bcrypt = require('bcryptjs'); // for hashing the password because i don't wanna save the plain password in the database


//register a new user
router.post('/register', async (req, res) => {

    try {

        //email is already exist or not
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.send({
                success: false,
                message: "User is already exists"
            });
        }

        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // here hash method take two parameters 1. plain text which we input in the password and the 2. salt round which means how many times we try the password section

        req.body.password = hashedPassword;

        //save the user
        const newUser = new User(req, body);
        await newUser.save()
        res.send({
            success: true,
            message: "New user created successfully"
        });

    } catch {
        res.send({
            success: false,
            message: error.message
        })
    }

});

module.exports = router;