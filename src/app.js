"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.use('/css', express_1.default.static(path_1.default.join(__dirname, '../css')));
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '../images')));
app.use('/src', express_1.default.static(path_1.default.join(__dirname, '../src')));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// error handling 
app.use((req, res) => {
    res.status(404).send('Page not found');
});
// starting server on port 3000
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// index.html on root 
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../index.html'));
});
// login.html on login route 
app.get('/login', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../login.html'));
});
// login validation
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        if (!user) {
            console.log(info.message);
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            req.session.save(() => {
                return res.redirect('/');
            });
        });
    })(req, res, next);
});
