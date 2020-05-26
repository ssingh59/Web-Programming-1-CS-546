const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
const animals = require("./data/animals");
const connection = require('./mongoConnection');
const { ObjectId } = require('mongodb')

const main = async () => {
   //Create animal sasha
  
        const sasha = await animals.create('Sasha', 'Dog');
        console.log("\n---------------------Newly created animal------------------\n");

    //log new animal
        console.log(sasha);

    //create animal Lucy
        const lucy = await animals.create('Lucy', 'Dog');

    //log all animals
        const allMyAnimals  = await animals.getAll();
        console.log("\n---------------------------All animals------------------------")
        console.log(allMyAnimals);
    
    //create new animal Duke
        const duke = await animals.create('Duke', 'Walrus');
        console.log("\n----------------------Newly created Duke------------------------\n");

    //log newwly created duke
        console.log(duke);  
    
    //rename sasha to sashita
    try{
        const sashita= await animals.rename(sasha._id, "Sashita");
        //log newly name Sashita
        console.log("\n-------------------Newly named Sashita-------------------------\n")
        console.log(sashita);
    }
    catch(err){
        console.log("Animal Id not found.")
    }

    

    //get lucy details before removing
    try{
        const getLucy = await animals.get(lucy._id);
        console.log("\n------------------Removed animal is:-----------------\n");
        console.log(getLucy);
    }
    catch(err){
        console.log("Animal Id not found.");
    }
        

    //remove lucy
    try{
        const removeLucy  = await animals.remove(lucy._id);
    }
    catch(err){
        console.log("Animal Id not found.")
    }
        

    //Log all animals
        const allMyAnimals2  = await animals.getAll();
        console.log("\n----------------------------All animals--------------------------\n")
        console.log(allMyAnimals2);
    
    //close connection
    const db = await connection();
    await db.serverConfig.close();
}

//main fucntions starts here
main().catch(error => {
    console.log(error);
  });





