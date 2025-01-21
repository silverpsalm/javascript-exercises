const leapYears = function(year) {

    // divisible by 4?
    if (year % 4 === 0) {

        // divisible by 100 AND 400? if not, false:
        if (year % 100 === 0 && year % 400 === 0) return true;
        if (year % 100 === 0 && year % 400 !== 0) return false;
        
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
