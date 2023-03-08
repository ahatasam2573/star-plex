const router = require('express').Router();
const user = require('../models/userModel');
const bcrypt = require('bcryptjs'); // for hashing the password because i don't wanna save the plain password in the database
const jwt = require('jsonwebtoken');

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

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }

});

//login a user
router.post('/login', async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User doesn't exists"
            })
        }

        //checking the password is correct or not
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.send({
                success: false,
                message: "Password is not correct"
            });
        }

        //create and assign a token
        const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
            expiresIn: '1d'
        })
        //here this sign method takes three parameters.1.plain text,2.secret key,3.expires time


        res.send({
            success: true,
            message: "Login Successful",
            data: token
        })

    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
})


module.exports = router; 