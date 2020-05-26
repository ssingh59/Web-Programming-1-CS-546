const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;
const bcrypt = require('bcrypt');
const logger = require('../logger').logger;



  // if user logged in redirect to private page
  router.get("/", logging, loggedIn, async (req, res) => {
      res.redirect("/private");
  });

  

  // login user page
  router.get("/login", logging, async (req, res) => {
    if(req.session.user) {
      res.redirect('/private');
    } else {
      res.render("login", { title: "User login" });
    }
  });

  // user private page
  router.get('/private', logging, loggedIn, async function (req, res) {
    let user = req.session.user;
    res.render('private', { username: user.username, firstName: user.firstName,
        lastName: user.lastName,profession: user.profession,bio: user.bio, user:user });
  });

  // login post handler
  router.post("/login", logging, async (req, res) => {

    if (!req.body.username) {
      res.render('login', { message: "Please enter username." });
    } 
    else if(!req.body.password) {
        res.render('login', { message: "Please enter password." });
    }
    
    else {
      let username=req.body.username;
      let password=req.body.password;
      const checkUsername = await usersData.getUsername(username);
      if (checkUsername === false) {
        res.status(401).render('login', { hasError: true , message: "Invalid username." });
          return;
        
      }
      else {//password matches
        if (await bcrypt.compareSync(password, checkUsername.hashedPassword)) {
          req.session.user = checkUsername;
        }
        else{
            res.status(401).render('login', { hasError: true , message: "Invalid password." });
        return;
        }
      }
      if (!req.session.user) {
        res.render('login', { message: "Invalid username or password." });
      }
      else {
        res.redirect("/private");
      }
    }
  });

  // logout user
  router.get('/logout', logging, async function (req, res) {
    let username = req.session.user ? req.session.user.username : undefined;
    req.session.destroy(function () {
        logger(`User logged out: ${username}`);
      });
    res.clearCookie('AuthCookie');
    res.render('logout',{username:username});
  });
 

  //middleware starts
  async function logging(req, res, next){
    let authUserString = req.session.user ? '(Authenticated User)' : '(Non-Authenticated User)';
    logger(`${req.method} ${req.originalUrl} ${authUserString}`);
    next();
  }

  async function loggedIn(req, res, next) {
    if (req.session.user) {
      next();     //If session exists, proceed to page
    } else {
      if(req.originalUrl === '/private'){
        res.status(403).render('error',{error:"You are forbidden to access this page. ERROR 403"})
      }
      else{
      let err = new Error("Not logged in!");
      res.redirect("/login");
      }
    }
  }
  //middleware ends

module.exports = router;