
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));


//get files as string
async function getFileAsString(path) {
    if(!path){
        throw "Please provide a file path";   
    }
        let fileContent = await fs.readFileAsync(path, "utf-8");//file output is of type string
        return fileContent;
        
}

//get file as json

  async function getFileAsJSON(path) {
    if(!path) {
        throw "You must provide a file path."
    }
        let fileContent = await fs.readFileAsync(path, "utf-8");//file output is of type string
        let stringToJSON = JSON.parse(fileContent);
        return stringToJSON;
  }

  //save String To File
  async function saveStringToFile(path, text) {
    if(!path) {
        throw "You must provide a file path.";
    }
    if(!text){
        throw "Text cannot be empty.";
    }
    let wFile = await fs.writeFileAsync(path, text);
    return wFile; 
}

//save json to file
  async function saveJSONToFile(path, obj) {
    if(!path) {
        throw "You must provide a file path.";
    }
    if(!obj){
        throw "Object must be provided.";
    }

    let jsonObj = JSON.stringify(obj);
    let wFile = await fs.writeFileAsync(path, jsonObj);
    return wFile;
  }
  

   module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile

  }
