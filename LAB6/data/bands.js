  
const bandCollection = require('../config/mongoCollections');
const bandVal = bandCollection.band;
const { ObjectId } = require('mongodb');




async function addBand(bandName, bandMembers, yearFormed, genres,albums, recordLabel){

    if (!bandName || !bandMembers || !yearFormed || !genres || !recordLabel) throw 'input data is provided';

    // if ((!bandMembers.length <=0) || (!Array.isArray(bandMembers)) 
    // || (!genres.length <= 0 ) || (!Array.isArray(genres))) throw 'You must provide an array of genres';
    if (!Array.isArray(albums)) {
        albums = [];
      }
const bandCollection = await bandVal();

    let newBand = {
        bandName: bandName, 
        bandMembers: bandMembers,
        yearFormed:yearFormed,
        genres:genres,
        albums:albums,
        recordLabel:recordLabel
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Could not add band';

    const newId = insertInfo.insertedId;

    const band = await this.getBandById(newId);
    return band;
}

async function getBandById(id){
    if (!id) throw 'You must provide an id to search for';

		const bandCollection = await bandVal();
		const bandDetail = await bandCollection.findOne({ _id: ObjectId(id) });
		if (bandDetail === null) throw 'No band with that id';

		return bandDetail;
}

//patch
async function updateBand(bandId,newBandData){
    if (!bandId) throw 'You must provide an id to search for';

		if (!Array.isArray(bandMembers) || !Array.isArray(genres)) throw 'you must privode data as an array';

		if (bandMembers.length <=0 || genres.length <= 0) throw 'You must provide some data for bandmemebers and genre';

        if (!bandId || !bandName || !bandMembers || !yearFormed || !genres ||
            !recordLabel) throw 'You must provide valid data.';

        let bandCollection = await bandVal();
        const updatedInfo = await bandCollection.updateOne({_id: bandId}, {$set: newBandData});

		if (updatedInfo.modifiedCount === 0) {
			throw 'could not update band successfully';
		}

		return this.getBandById(bandId);
}

async function removeBand(id){
    if (!id) throw 'You must provide an id to search for';
        const bandCollection = await bandVal();
		const deletionInfo = await bandCollection.deleteOne({ _id:ObjectId(id) });

		if (deletionInfo.deletedCount === 0) {
			throw `Could not delete band with id of ${id}`;
        }
        //const bandInfo = await this.getBandById(objId);
		return this.getBandById(id);
}

async function getAllBands() {
    const bandCollection = await bandVal();
    const bandList = await bandCollection.find({}).toArray();

    return bandList;
}

module.exports = {
    addBand,
    updateBand,
    removeBand,
    getBandById,
    getAllBands
    
}