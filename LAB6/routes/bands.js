const express = require("express");
const router = express.Router();
const data = require("../data");
const bandData = data.bands;
const albumData = data.albums;

router.get("/:id", async (req, res) => {
  try {
    const user = await bandData.getBandById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(404).json({ message: 'not found!' });
  }
});

router.get("/", async (req, res) => {

  
  try {
    const userList = await bandData.getAllBands();
    res.json(userList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  const newPostBand = req.body;
  try{
    const { bandName, bandMembers, yearFormed, genres, albums, recordLabel } = newPostBand;
    console.log(newPostBand);
		const newPost = await bandData.addBand(bandName, bandMembers, yearFormed, genres, albums, recordLabel);
      res.json(newPost);
    } 
  catch (e) {
    res.status(500).json({ error: e });
      }
    });

router.put('/:id', async (req, res) => {
  const bandInfo = req.body;
    
      if (!bandInfo) {
        res.status(400).json({ error: 'You must provide data to update a user' });
        return;
      }
    
      if (!bandInfo.bandName) {
        res.status(400).json({ error: 'You must provide a first name' });
        return;
      }
    
      if (!bandInfo.bandMembers) {
        res.status(400).json({ error: 'You must provide a last name' });
        return;
      }
      
      try {
        await bandData.getBandById(req.params.id);
      } catch (e) {
        res.status(404).json({ error: 'Band not found' });
        return;
      }
    
      try {
        const newPatch = await bandData.updateBand(req.params.id, bandInfo);
        res.json(newPatch);
      } catch (e) {
        res.sendStatus(500);
      }
    });
    
    router.delete('/:id', async (req, res) => {
      try {
        await bandData.getBandById(req.params.id);
      } catch (e) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
    
      try {
        await bandData.removeBand(req.params.id);
        res.sendStatus(200);
      } catch (e) {
        res.sendStatus(500);
        return;
      }
    });

module.exports = router;