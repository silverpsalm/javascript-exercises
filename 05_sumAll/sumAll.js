const sumAll = function(numOne,numTwo) {
    let sum = 0;
    let biggerNum = 0;
    let smallerNum = 0;

    // biggest number check
    if (numOne < 0 || numTwo < 0 || 
        Number.isInteger(numOne) != true || Number.isInteger(numTwo) != true) {

        // negative num ERROR
        return "ERROR";
    } 
    else if (numOne > numTwo) {
        biggerNum += numOne;
        smallerNum += numTwo;
    } else {
        biggerNum += numTwo;
        smallerNum += numOne;
    }

    // add all in between
    for (i=smallerNum;i<=biggerNum;i++) {
    sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;