  
const fileData = require("./fileData");
const textMetrice = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

//actions are performed on 3 text files
async function lab3(path, Name)//chapter1 or 2 or 3
{
    if(!path) {
        throw Path+" Please provide file path."
    }
    if(!Name) {
        throw Name +" file is undefined."
    }
    if(!fs.existsSync(path)) {
        throw Name +" file does not exist."
    }
    let jsonFilePath = Name+".result.json";
    let fileExists = fs.existsSync(jsonFilePath);

    if(!fileExists) {//if json file not exits, perform action and create json file
        let fileString = await fileData.getFileAsString(path);
        let metriceObj = await textMetrice.createMetrics(fileString);
        let writeObj = await fileData.saveJSONToFile(jsonFilePath,metriceObj);
        console.log(metriceObj);//print object of new json file
    }
    else {//if json file present, print cotents of file
        let getJSONData = await fileData.getFileAsJSON(jsonFilePath);
        console.log(getJSONData);//print data for existing json file
    }
}

//main function starts here
async function main(){

    for (let i = 1; i < 4; i++) {
        filePath = "./chapter"+i+".txt";
        fileName = "./chapter"+i;
        try{
            await lab3(filePath, fileName);
        }
        catch(err){
            console.log("Error:"+err);
        }
    }
}

//main is called here
main();