
const questionOne = function questionOne(arr) {
        let sum=0;
        if(arr != undefined){
            for(let i = 0; i < arr.length; i++) {
                sum += Math.pow(arr[i], 2);
            }
            return sum;
        }
        else return "Please provide some valid input."
        
};


 const questionTwo = function questionTwo(n) { 

     if(n<0 || n===0) 
     return 0;

     if (n===1 || n===2) 
     return 1;
    
     if(Number.isInteger(n)){
     let sum = questionTwo(n-1) + questionTwo(n-2);
     return sum;
     }
     else return "Input should be an integer."
     
   };

const questionThree = function questionThree(text) {
    let stringtext = text.toString();
    let matchedstring = stringtext.match(/[aeiouAEIOU]/g);
    if(text != undefined){

        if (matchedstring === null)
        return 0;
        else 
        return matchedstring.length;
    }
    else {
        return "Provide some input."
    }

};



const questionFour = function questionFour(num) {
    if(num < 0)
    return NaN;

    if(num === 0)
    return 1;

    if(Number.isInteger(num)){
    let fact = num * questionFour(num-1);
        return fact;
    }
    else{
        return "Input should be an integer."
    }

};


module.exports = {
    firstName: "SHWETA", 
    lastName: "SINGH", 
    studentId: "10457493",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
