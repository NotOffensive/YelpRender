const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(
        passport.authenticate('local', {
            failureFlash: true,
            failureRedirect: '/login'
        }),
        (req, res) => {
            req.flash('success', 'Welcome back!');
            const redirectUrl = req.session.returnTo || '/campgrounds';
            delete req.session.returnTo;
            return res.redirect(redirectUrl);
        }
    );

router.get('/logout', users.logout);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const catchAsync = require('../utils/catchAsync');
// const User = require('../models/user');
// const users = require('../controllers/users');

// router.route('/register')
//     .get(users.renderRegister)
//     .post(catchAsync(users.register));

// router.route('/login')
//     .get(users.renderLogin)
//     .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

// router.get('/logout', users.logout)

// module.exports = router;