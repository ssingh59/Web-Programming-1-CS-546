const express = require("express");
const router = express.Router();

  const aboutMe ={
    "name": "Shweta Singh",
    "cwid": "10457493",
    "biography": "I am a Graduate student in Computer Science at Stevens Institute of Technology. I have done my under-graduation in Information Technology and have few years of experience in Software Industry into Web Development, Manual Testing and Robotic Process Automation.\nI love singing and playing badminton, table tennis, volleyball. One of my best experiences was visit to Sikkim, India. It is so calm, serene especially in the month of January.",
    "favoriteShows": ["Friends", "Breaking Bad", "The Office", "Sarabhai vs Sarabhai"],
    "hobbies": ["Badminton", "Volleyball", "Singing", "Painting"] 
  }

  router.get("/", async (req, res) => {
    try {
      await res.json(aboutMe);
    } 
    catch (e) {
      res.status(404).json({ message: "not found!" });
    }
  });

  module.exports= router;