let reverseArray = function reverseOrderOfElementsInArray (array) {
    let reversedArray = [];
    
    while ( array.length > 0 ) {
        let lastLetter = array.pop();
        reversedArray.push(lastLetter);
    }

    return reversedArray; 
}

const reverseString = function(stringToReverse) {
    let arrayToReverse = stringToReverse.split('');

    let reversedArray = reverseArray(arrayToReverse);
    
    let reversedString = reversedArray.join('');
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
