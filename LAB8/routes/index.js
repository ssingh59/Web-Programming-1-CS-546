const express = require('express');
const router = express.Router();


const constructorMethod = (app) => {
app.get("/", async (req, res) => {res.render("home");});

app.post("/result", async (req, res) => {
  let sString = req.body["text-to-test"];

  if (sString == '') {//if text is empty throw error
    await res.status(400).send("<p> Error 400. Input text empty. </p>");
  }
  //reference- https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d
  else{
        let isPalindrome;
        let cleanString = sString.replace(/[\W_]/g, "").toLowerCase();
        let palindromeString = cleanString.split('').reverse().join('');

        if (palindromeString == '') {//if text is not a string throw error
            await res.status(400).send("<p> Error 400. Input text is not string. </p>");
            
          }
        
        if (cleanString == palindromeString) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
        await res.status(200).render("result", {isPalindrome: isPalindrome,text: sString});
    }
    });
};

module.exports = constructorMethod, router;