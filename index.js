var express = require('express');
//using express-session to enable session storage for our server
var session = require("express-session");
const cors = require('cors');
require('dotenv').config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//imports entire controllers folder, we will handle moularization there
var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin:["https://rufasa85.github.io","http://localhost:3000"],
    credentials:true
}));

// Static directory
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));


app.use('/',allRoutes);


db.sequelize.sync({ force:false}).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});