import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
//import session = require('express-session');

declare module 'express-session' {
  interface SessionData {
    passport: { user: string };
  }
}
import * as path from 'path';
import axios from 'axios';

const mongoose = require( "mongoose" );
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use('/src', express.static(path.join(__dirname, '../src')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use (passport.initialize());
app.use (passport.session());

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
  res.sendFile(path.join(__dirname, '../index.html'));
});

// login.html on login route 
app.get('/login', (req, res) => {
res.sendFile(path.join(__dirname, '../login.html'));
});

// login validation

app.post('/login',(req, res, next) =>{
  passport.authenticate('local', (err: any, user: any, info: { message: any; })=>{
    if (err) { 
      console.log(err);
      return next(err); 
  }
  if (!user) { 
      console.log(info.message);
      return res.redirect('/login'); 
  }
  req.logIn(user, (err: any) => {
      if (err) { 
          console.log(err);
          return next(err); 
      }
      req.session.save(() => {
          return res.redirect('/');
      });
  });
})(req, res, next);
  })