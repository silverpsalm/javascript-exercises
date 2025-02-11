const fibonacci = function(num) {

    let fiboArray = [1,1];

    for( i=2 ; i<num ; i++ ) {
        let sumOfPreviousTwo = fiboArray[i-1] + fiboArray[i-2];

        fiboArray.push(sumOfPreviousTwo);
        }
    
    return fiboArray[num-1];
}


console.log(fibonacci(8));



    // OLD SOLUTION 1: 

    // // convert string to number
    // let num = +getNum;

    // if (num === 0) return 0;
    // if (num < 0) return "OOPS";

    //     let getFibo = [1];

    //     // generate fibo sequence up to inputed #:
    //     for( i=1; i<=num ; i++) {
    //         // if i-1 NaN, add 0 instead
    //         let previousNum1 = (getFibo[i-1]) ? getFibo[i-1] : 0;
    //         let previousNum2 = (getFibo[i-2]) ? getFibo[i-2] : 0;

    //         getFibo.push(previousNum1 + previousNum2);
    //     }
    //     return getFibo[num-1];

// OLD SOLUTION 2 (caused freezing on testing)
    // let fiboArr = [];

    // let num1 = 0;
    // let num2 = 1;

    // for (i=0; i < getNum; i++) {
    //     if(i=0) {
    //         fiboArr.push(num2);
    //     }
        
    //     let current = num1 + num2;

    //     fiboArr.push(current);
        
    //     num1 = num2;
    //     num2 = current;

    // }

    // return fiboArr[getNum-1];

// Do not edit below this line
module.exports = fibonacci;
