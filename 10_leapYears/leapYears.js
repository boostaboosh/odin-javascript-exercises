let isDivisibleByFour = function isNumberDivisibleByFour ( number ) {
    if ( number % 4 === 0 ) { return true }
    else { return false }
}

let isDivisibleByOneHundred = function isNumberDivisibleByOneHundred ( number ) {
    if ( number % 100 === 0 ) { return true }
    else { return false }
}

let isDivisibleByFourHundred = function isNumberDivisibleByFourHundred ( number ) {
    if ( number % 400 === 0 ) { return true }
    else { return false }
}

const leapYears = function( year ) {
    let isLeapYear = false;

    if ( isDivisibleByFour( year ) ) {
        isLeapYear = true;
        if ( isDivisibleByOneHundred( year ) ) {
            isLeapYear = false;
            if ( isDivisibleByFourHundred ( year ) ) {
                isLeapYear = true;
            }
        }
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
