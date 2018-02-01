const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');


const app = express();
// console.developers.google.com
//clientID 347347674846-7nbf865o1ptb9mk13vet0mh43nda0d84.apps.googleusercontent.com
//clientSecret 0Zol4CWvM6g0NYjxg66Lk3ln
passport.use(
    new googleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy:true
        }, accessToken => {
            console.log(accessToken);
        }
    )
);

app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);


app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server successfully started !');
});