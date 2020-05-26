const express = require("express");
const router = express.Router();
const data = require("../data");
const albumData = data.albums;


router.get("/:id", async (req, res) => {
  try {
    const album = await albumData.getAlbumById(req.params.id);
    res.json(album);
  } catch (e) {
    res.status(404).json({ message: 'not found!' });
  }
});

router.get("/", async (req, res) => {

  
  try {
    const albumList = await albumData.getAllAlbums();
    res.json(albumList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  const newPostBand = req.body;
  try{
    const { title, author, songs} = newPostBand;
    console.log(newPostBand);
		const newPost = await albumData.addAlbum(title, author, songs);
      res.json(newPost);
    } 
  catch (e) {
    res.status(500).json({ error: e });
      }
    });

router.patch('/:id', async (req, res) => {
     
    const albumInfo = req.body;
    
      try {
        await albumData.getAlbumById(req.params.id);
      } catch (e) {
        res.status(404).json({ error: 'album not found' });
        return;
      }
    
      try {
        const newPatch = await albumData.updateAlbum(req.params.id, albumInfo);
        res.json(newPatch);
      } catch (e) {
        res.sendStatus(500);
      }
    });
    
    router.delete('/:id', async (req, res) => {
      try {
        await albumData.getAlbumById(req.params.id);
      } catch (e) {
        res.status(404).json({ error: 'album not found' });
        return;
      }
    
      try {
        await albumData.removeAlbum(req.params.id);
        res.sendStatus(200);
      } catch (e) {
        res.sendStatus(500);
        return;
      }
    });

module.exports = router;