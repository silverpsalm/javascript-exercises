const fibonacci = function(getNum) {
    // convert string to number
    let num = +getNum;

    if (num === 0) return 0;
    if (num < 0) return "OOPS";

        let getFibo = [1];

        // generate fibo sequence up to inputed #:
        for( i=1; i<=num ; i++) {
            // if i-1 NaN, add 0 instead
            let previousNum1 = (getFibo[i-1]) ? getFibo[i-1] : 0;
            let previousNum2 = (getFibo[i-2]) ? getFibo[i-2] : 0;

            getFibo.push(previousNum1 + previousNum2);
        }
        return getFibo[num-1];
};



// Do not edit below this line
module.exports = fibonacci;
