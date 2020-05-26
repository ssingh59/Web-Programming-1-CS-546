const express = require("express");
const router = express.Router();

  const story ={
      
        "storyTitle": "Matty The Cat",
        "story": "Matty was a homeless cat, born with five siblings. They were all were cute and fluffy and a week old. Seven days old. \nThey were round and fluffy like a cotton ball. The nameless cat had gray and white fur. \nBut, his two brothers and three sisters had a different color fur. Some were white. Others were gray."
  }

  router.get("/", async (req, res) => {
    try {
      await res.json(story);
    } catch (e) {
      res.status(404).json({ message: "not found!" });
    }
  });

  module.exports= router;