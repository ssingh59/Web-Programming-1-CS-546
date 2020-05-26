const lab2a = require("./geometry");
const lab2b = require("./utilities");

//Volume of rectangular prism--------------------------------------------
try {
    let volRectangle = lab2a.volumeOfRectangularPrism(2,1,2/2);
    console.log("Volume of rectangular prism is: "+volRectangle);
  } catch (e) {
    console.log("Error while calculating volume of Rectangle Prism. "+e);
  }

  try {
    let volRectangle = lab2a.volumeOfRectangularPrism("a","b","c");
    console.log("Volume of rectangular prism is: "+volRectangle);
  } catch (e) {
    console.log("Error while calculating volume of Rectangle Prism. "+e);
  }

  try {
    let volRectangle = lab2a.volumeOfRectangularPrism(1,'',2);
    console.log("Volume of rectangular prism is: "+volRectangle);
  } catch (e) {
    console.log("Error while calculating volume of Rectangle Prism. "+e);
  }

  try {
    let volRectangle = lab2a.volumeOfRectangularPrism(1,2/2,null);
    console.log("Volume of rectangular prism is: "+volRectangle);
  } catch (e) {
    console.log("Error while calculating volume of Rectangle Prism. "+e);
  }

  try {
    let volRectangle = lab2a.volumeOfRectangularPrism("",1,2);
    console.log("Volume of rectangular prism is: "+volRectangle);
  } catch (e) {
    console.log("Error while calculating volume of Rectangle Prism. "+e);
  }

  //surface area of rectangular prism-----------------------------------------------------
  try {
    let surfRectangle = lab2a.surfaceAreaOfRectangularPrism(2,1,2/2);
    console.log("Surface area of Rectangular prism is: "+surfRectangle);
  } catch (e) {
    console.log("Error while calculating area of prism. "+e);
  }

  try {
    let surfRectangle = lab2a.surfaceAreaOfRectangularPrism("",1,2);
    console.log("Surface area of Rectangular prism is: "+surfRectangle);
  } catch (e) {
    console.log("Error while calculating area of prism. "+e);
  }

  try {
    let surfRectangle = lab2a.surfaceAreaOfRectangularPrism(1,2/2,null);
    console.log("Surface area of Rectangular prism is: "+surfRectangle);
  } catch (e) {
    console.log("Error while calculating area of prism. "+e);
  }

  try {
    let surfRectangle = lab2a.surfaceAreaOfRectangularPrism("a","b","c");
    console.log("Surface area of Rectangular prism is: "+surfRectangle);
  } catch (e) {
    console.log("Error while calculating area of prism. "+e);
  }

  try {
    let surfRectangle = lab2a.surfaceAreaOfRectangularPrism(1,'',2);
    console.log("Surface area of Rectangular prism is: "+surfRectangle);
  } catch (e) {
    console.log("Error while calculating area of prism. "+e);
  }

  //volume of sphere------------------------------------------------------------------
  try {
    let volSphere = lab2a.volumeOfSphere(2);
    console.log("Volume of sphere is: "+volSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

  try {
    let volSphere = lab2a.volumeOfSphere('');
    console.log("Volume of sphere is: "+volSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

  try {
    let volSphere = lab2a.volumeOfSphere("");
    console.log("Volume of sphere is: "+volSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

  try {
    let volSphere = lab2a.volumeOfSphere(null);
    console.log("Volume of sphere is: "+volSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

  try {
    let volSphere = lab2a.volumeOfSphere(0);
    console.log("Volume of sphere is: "+volSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

  //surface area of sphere--------------------------------------------------------------------
  try {
    let surfSphere = lab2a.surfaceAreaOfSphere(2);
    console.log("surface area of sphere is : "+surfSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

  try {
    let surfSphere = lab2a.surfaceAreaOfSphere("");
    console.log("surface area of sphere is : "+surfSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }
  try {
    let surfSphere = lab2a.surfaceAreaOfSphere('');
    console.log("surface area of sphere is : "+surfSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }
  try {
    let surfSphere = lab2a.surfaceAreaOfSphere(null);
    console.log("surface area of sphere is : "+surfSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }
  try {
    let surfSphere = lab2a.surfaceAreaOfSphere(undefined);
    console.log("surface area of sphere is : "+surfSphere);
  } catch (e) {
    console.log("Error while calculating volume of sphere. "+e);
  }

//Deep equality----------------------------------------------------------------------------
const first = {a: 2, b: 3};
const second = {a: 2, b: 3};
const third = {a: 3, b: 2};
const fourth = {a: 2, b: 4};
const fifth = {a: 3, b: 4};

try {
let equality1 = lab2b.deepEquality(first, second);
console.log("Is object 1 and object 2 equal? "+equality1);
} catch (e) {
    console.log("Error while performing deep equality. "+e);
  }

  try {
    let equality2 = lab2b.deepEquality(first, third);
    console.log("Is object 1 and object 2 equal? "+equality2);
    } catch (e) {
        console.log("Error while performing deep equality. "+e);
      }

      try {
        let equality3 = lab2b.deepEquality(fourth, fifth);
        console.log("Is object 1 and object 2 equal? "+equality3);
        } catch (e) {
            console.log("Error while performing deep equality. "+e);
          }

          try {
            let equality4 = lab2b.deepEquality(fifth, second);
            console.log("Is object 1 and object 2 equal? "+equality4);
            } catch (e) {
                console.log("Error while performing deep equality. "+e);
              }

              try {
                let equality5 = lab2b.deepEquality(second, third);
                console.log("Is object 1 and object 2 equal? "+equality5);
                } catch (e) {
                    console.log("Error while performing deep equality. "+e);
                  }



  //unique elements-------------------------------------------------------------------------
  const testArr1 = ["a", "a", "b", "a", "b", "c"];
  const testArr2 = ["a", "b", "c", "d", "e"]
  const testArr3 = [];
  const testArr4 = [""];
  const testArr5 = [null];
try {
    let uniqEle1 = lab2b.uniqueElements(testArr1);
    
    console.log("Unique count of characters is: "+uniqEle1);
} catch (e) {
    console.log("Error while finding unique elements. "+e);
  }

  try {
    let uniqEle2 = lab2b.uniqueElements(testArr2);
    console.log("Unique count of characters is: "+uniqEle2);
} catch (e) {
    console.log("Error while finding unique elements. "+e);
  }


  try {
    let uniqEle3 = lab2b.uniqueElements(testArr3);
    console.log("Unique count of characters is: "+uniqEle3);
} catch (e) {
    console.log("Error while finding unique elements. "+e);
  }


  try {
    let uniqEle4 = lab2b.uniqueElements(testArr4);
    console.log("Unique count of characters is: "+uniqEle4);
} catch (e) {
    console.log("Error while finding unique elements. "+e);
  }


  try {
    let uniqEle5 = lab2b.uniqueElements(testArr5);
    console.log("Unique count of characters is: "+uniqEle5);
} catch (e) {
    console.log("Error while finding unique elements. "+e);
  }


//count of each character in string----------------------------------------------------------------
const countTest1 = "Hello, the pie is in the oven";
const countTest2 = "";
const countTest3 = null;
const countTest4 = '';
const countTest5 = 0;

try {
    const charMap1 = lab2b.countOfEachCharacterInString(countTest1); 
    console.log("Count of each character in string is: "+charMap1);
} catch (e) {
    console.log("Error performing countTest fucntion. "+e);
  }

  try {
    const charMap2 = lab2b.countOfEachCharacterInString(countTest2);
    console.log("Count of each character in string is: "+charMap2);
} catch (e) {
    console.log("Error performing countTest fucntion. "+e);
  }

  try {
    const charMap3 = lab2b.countOfEachCharacterInString(countTest3); 
    console.log("Count of each character in string is: "+charMap3);
} catch (e) {
    console.log("Error performing countTest fucntion. "+e);
  }

  try {
    const charMap4 = lab2b.countOfEachCharacterInString(countTest4);
    console.log("Count of each character in string is: "+charMap4);
} catch (e) {
    console.log("Error performing countTest fucntion. "+e);
  }

  try {
    const charMap5 = lab2b.countOfEachCharacterInString(countTest5) 
    console.log("Count of each character in string is: "+charMap5);
} catch (e) {
    console.log("Error performing countTest fucntion. "+e);
  }




