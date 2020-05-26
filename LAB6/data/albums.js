  
  
const albumCollection = require('../config/mongoCollections');
const albumVal = albumCollection.album;
const { ObjectId } = require('mongodb');

async function addAlbum(title, author, songs){
const albumCollection = await albumVal();
    let newAlbum = {
        title: title,
        author:author,
        songs:songs
    };
    const insertInfo = await albumCollection.insertOne(newAlbum);
    if (insertInfo.insertedCount === 0) throw 'Could not add album';

    const newId = insertInfo.insertedId;

    const album = await this.getAlbumById(newId);
    return album;
}

async function getAlbumById(id){
    if (!id) throw 'You must provide an id to search for';

		const albumCollection = await albumVal();
		const albumDetail = await albumCollection.findOne({ _id:  ObjectId(id) });
		if (albumDetail === null) throw 'No band with that id';

		return albumDetail;
}

async function updateAlbum(albumId,updatedAlbum){

        const albumCollection = await albumVal();
		const updatedAlbum = {
            title: updatedAlbum.title
		};
          let updateCommand = {
            $set: updatedAlbum
          };
		const updatedInfo = await albumCollection.updateOne({ _id: ObjectId(albumId) }, { $set: updateCommand });
		if (updatedInfo.modifiedCount === 0) {
			throw 'could not update band successfully';
		}

		return await this.getAlbumById(id);
}

async function removeAlbum(id){
    if (!id) throw 'You must provide an id to search for';
        const albumCollection = await albumVal();
		const deletionInfo = await albumCollection.deleteOne({ _id: id});

		if (deletionInfo.deletedCount === 0) {
			throw `Could not delete band with id of ${id}`;
		}
		return { deleted: true };
}

//get all albums
async function getAllAlbums() {
    const albumCollection = await albumVal();
    const albumList = await albumCollection.find({}).toArray();

    return albumList;
}

module.exports = {
    addAlbum,
    updateAlbum,
    removeAlbum,
    getAlbumById,
    getAllAlbums
    
}