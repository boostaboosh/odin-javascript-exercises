const repeatString = function(string, numberOfRepetions) { 
    
    if (numberOfRepetions < 0) { return 'ERROR' };

    returnString = '';

    for ( let repetition = 0; repetition < numberOfRepetions; repetition++ ) {
        returnString += string;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
