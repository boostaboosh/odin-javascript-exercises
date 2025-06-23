const fibonacci = function(numInSeries) {
    if (numInSeries < 0) return "OOPS"
    if (numInSeries <= 2 && numInSeries > 0)
    {
        return 1
    }
    let num1 = 1
    let num2 = 1
    let sum = 0
    for (let i = 3; i <= numInSeries; i++)
    {
        sum = num1 + num2
        num1 = num2
        num2 = sum
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
