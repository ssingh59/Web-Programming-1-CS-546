const express = require('express'),
                app = express(),
                bodyParser = require('body-parser'),
                configRoutes = require('./routes'),
                cookieParser = require('cookie-parser'),
                session = require('express-session'),
                exphbs = require('express-handlebars'),
                Handlebars = require('handlebars'),
                static = express.static(__dirname + '/public');


    app.use("/public", static);
    
    app.use(session({
        key:"AuthCookie",
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));
    
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.engine('handlebars', exphbs({ defaultLayout:'main' }));
    app.set('view engine', 'handlebars');
    configRoutes(app);
    
    app.listen(3000, () => {
        console.log("We've now got a server");
        console.log("Your routes will be running on http://localhost:3000");
        if (process && process.send) process.send({done: true});
    });