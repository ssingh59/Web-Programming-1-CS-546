
function checkObject(value,paramName) {

    if(value == null) {
        throw `${paramName || 'provided variable'} cannot be null.`;
    }
    if(value == undefined) {
        throw `${paramName || 'provided variable'} cannot be undefined.`;
    }
}

function checkString(value,paramName) {

    if(typeof value !== 'string')
    throw `${paramName || 'provided variable'} is not a string.`;

    if(value === null || value == "")
    throw `${paramName || 'provided variable'} cannot be empty.`;
}

function checkArray(value,paramName) {

    if(! Array.isArray(value))
    throw `${paramName || 'provided variable'} is not an array.`;

    if(value == null || value == "")
    throw `${paramName || 'provided variable'} cannot be empty.`;
    
}

function deepEquality(obj1, obj2) {

    checkObject(obj1,'Object1');
    checkObject(obj2,'Object2');

    if(obj1 === obj2)
    return true;

    if(obj1.length !== obj2.length) {
        return false;
    }
    if(obj1 == null || obj2 == null) {
        return false;
    }
    if(typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        return false;
    }
    let keysA = Object.keys(obj1);
    let keysB = Object.keys(obj2);
    if(keysA.length !== keysB.length) {
        return false;
    }
//Reference used for object properties
//https://medium.com/@czech.candice/eloquent-javascript-data-structures-objects-and-arrays-chapter4-63bffd7d8335
    for(const item in obj2) {
        if(obj1.hasOwnProperty(item)) {

            if(!deepEquality(obj1[item],obj2[item])) {
                return false;
            }
        }
        else
        return false;
    }
    return true;  
}

function uniqueElements(arr) {

    checkArray(arr,'Array');
    let len = arr.length;
    let i = 0;
    //Reference used for how to use Array.from
    //https://medium.com/javascript-everyday/javascript-array-from-53287c195487
    let unique = Array.from(new Set(arr));
    return unique.length;

}
function countOfEachCharacterInString(str) {

    checkString(str,'String Value');
    let charArr = str.toLowerCase().split("");
    let len = charArr.length;
    let i = 0;
    const uniqueCount  = {};
    for (i ; i < len; i++) {
        if(uniqueCount[charArr[i]]) {
        uniqueCount[charArr[i]] = 1 + uniqueCount[charArr[i]];
    }
    else {
        uniqueCount[charArr[i]] = 1
    }
    }
    return JSON.stringify(uniqueCount);
}

module.exports = { 
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};

