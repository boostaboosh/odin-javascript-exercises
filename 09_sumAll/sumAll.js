const sumAll = function( numberOne , numberTwo ) {
    if ( ! Number.isInteger( numberOne ) || ! Number.isInteger( numberTwo ) ) { return 'ERROR' }
    else if ( numberOne < 0 || numberTwo < 0 ) {return 'ERROR'}
    else if ( numberOne === numberTwo ) { return numberOne }
    else {
        let biggerNumber = numberOne > numberTwo ? numberOne : numberTwo;
        let smallerNumber = biggerNumber === numberOne ? numberTwo : numberOne; 

        let sumOfAll = 0;
        for (let numberIteration = smallerNumber; numberIteration <= biggerNumber; numberIteration++) {
            sumOfAll += numberIteration;
        }

        return sumOfAll;
    }
};

// Do not edit below this line
module.exports = sumAll;
