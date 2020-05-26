
const express = require("express");
const router = express.Router();

  const education =
      
    [
        {
          "schoolName": "Gujarat Technological University",
          "degree": "BS in Information Technology",
          "favoriteClass": "Maths",
          "favoriteMemory": "Late night Singing practice and playing badminton"
        },

        {"schoolName": "Stevens Institute of Technology",
          "degree": "MS in Computer Science",
          "favoriteClass": "Web Programming",
          "favoriteMemory": "Visit to brooklyn bridge with family"
        }
    ]

  router.get("/", async (req, res) => {
   
    try {
      await res.json(education);
    } catch (e) {
      res.status(404).json({ message: "not found!" });
    }
  });

  module.exports= router;