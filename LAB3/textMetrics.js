
function createMetrics(text) {

    
    if(typeof text !== 'string') {
        throw "Input type is not string."
    }

    if(text.trim().length === 0) {
        throw "Empty file."
    }

    //total words
    let textToStr = String(text).toLowerCase();
    textToStr = textToStr
    .replace(/[^a-z]/gi, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();

    console.log(textToStr);
    //count of letters only
    let letterOnlyCount = 0;
    for (let i = 0; i < textToStr.length; i++) {
        if(textToStr.charAt(i).match(/^[A-Za-z]+$/)) {
            letterOnlyCount = letterOnlyCount + 1;
        }
      }

    //count of non letters
    let nonLetterCount = textToStr.length - letterOnlyCount;

    //total words
    let textArray = textToStr.split(" ");
    let totalWords = textArray.length;

    //total vowels
    let vowelsCount = 0;
    for (let i = 0; i < textToStr.length; i++) {
        if(textToStr.charAt(i).match(/[aeiouAEIOU]/g)) {
            vowelsCount = vowelsCount + 1;
        }
      }

    //total consonents
    let consonentsCount = letterOnlyCount - vowelsCount;



    //unique words
    let uniqueWordsCount = 0;
    let uniqueWords = Array.from(new Set(textArray));
    uniqueWordsCount = uniqueWords.length;

    //long words count 
    let longWordsCount = 0;
    let sumLength = 0;
    let avgWordLength = 0;
    for (let i = 0; i < textArray.length; i++) {
    if(textArray[i].length >= 6) {
        longWordsCount = longWordsCount + 1;

    }//averageWordLength
    sumLength = sumLength + textArray[i].length;
    }
    avgWordLength = sumLength / textArray.length;

    //word occurrences
    let len = textArray.length;
    i = 0;
    const wordOccurr  = {};
    for (i ; i < len; i++) {
        if(wordOccurr[textArray[i]]) {
            wordOccurr[textArray[i]] = 1 + wordOccurr[textArray[i]];
    }

else {
    wordOccurr[textArray[i]] = 1
}
}
        

let jsonObject = { 
    totalLetters: letterOnlyCount,
    totalNonLetters: nonLetterCount,
    totalWords: totalWords,
    totalVowels: vowelsCount,
    totalConsonants: consonentsCount,
    uniqueWords: uniqueWordsCount,
    longWords: longWordsCount,
    averageWordLength: avgWordLength,
    wordOccurrences: wordOccurr
};
return jsonObject;
}


module.exports = {
    createMetrics
};