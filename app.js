'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes');

// Express configuration
const app = express();
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
require('./auth');

app.get('/', routes.site.index);
app.get('/oauth/login', routes.site.loginForm);
app.post('/oauth/login', routes.site.login);
app.get('/oauth/logout', routes.site.logout);
app.get('/oauth/account', routes.site.account);

app.get('/oauth/dialog/authorize', routes.oauth2.authorization);
app.post('/oauth/dialog/authorize/decision', routes.oauth2.decision);
app.all('/oauth/oauth/token', routes.oauth2.token);

app.get('/oauth/api/userinfo', routes.user.info);
app.get('/oauth/api/clientinfo', routes.client.info);

app.listen(process.env.PORT || 3000);
