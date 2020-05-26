const mongoCollections = require("../mongoCollections.js");
const animals = mongoCollections.animals;
const { ObjectId } = require('mongodb')
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {

  async get(id) {
    
    let getAnimal;
    let objId;
    if (!id) throw "You must provide an id to search for";
    const animalCollection = await animals();
    if(typeof id === 'string') {
      objId = ObjectId.createFromHexString(id);//string id
      getAnimal = await animalCollection.findOne({ _id: objId });
    }
    else if(typeof id === 'object'){
      getAnimal = await animalCollection.findOne({ _id: id });//object id
    }
    else throw "ID should be of type string or object.";

    if (getAnimal === null) throw "No Animal with that id";

   return getAnimal;
  },

  async getAll() {
    const animalCollection = await animals();
    const allAnimals= await animalCollection.find({}).toArray();
    return allAnimals;
  },


  async create(name, animalType) {

    if (!name || !animalType) throw "Animal name and animal type cannot be empty.";
    const animalCollection = await animals();
    let newAnimal = {
      name: name,
      animalType: animalType
    };
    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw "Could not add Animal.";
    const newId = insertInfo.insertedId;
    const animal = await this.get(newId);
    return animal;
  },


  async remove(id) {
    
    let deleteAnimal;
    let objId;
    if (!id) throw "You must provide an id to search for.";
    const animalCollection = await animals();

    if(typeof id === 'string') {
      objId = ObjectId.createFromHexString(id);//string id
      deleteAnimal = await animalCollection.removeOne({ _id: objId });
    }  
    else if(typeof id === 'object'){
      objId = id;
      deleteAnimal = await animalCollection.removeOne({ _id: objId });
    }
    else  throw "Id must be string or object."

    if (deleteAnimal.deletedCount === 0) {
      throw `Could not delete animal with id of ${objId}`;
    }
    return deleteAnimal;//return deleted animal and print in index.js
  },

  async rename(id, newName) {
    let objId;
    let renameAnimal;
    
    if (!id) throw "You must provide an id to search for";

    if (!newName) throw "You must provide a name for your Animal";

    const animalCollection = await animals();
    const updatedAnimal = {
      name: newName
    };

    if(typeof id === 'string') {
      objId = ObjectId.createFromHexString(id);//string id
      renameAnimal = await animalCollection.updateOne({ _id: objId }, { $set: updatedAnimal });
    }
    else if(typeof id === 'object') {
      objId=id;
      renameAnimal = await animalCollection.updateOne({ _id: objId }, { $set: updatedAnimal });
    }
    else throw "Id should be string or object."

    if (renameAnimal.modifiedCount === 0) {
      throw "could not update Animal successfully";
    }

    return await this.get(objId);
  }
};