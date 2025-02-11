const fibonacci = function(number) {
    let num = parseInt(number);

    if(num == 0) {
        return 0;
    } else if(num < 0) {
        return "OOPS";
    } else {
    
    let fiboArray = [1,1];

    for( i=2 ; i<num ; i++ ) {
        let sumOfPreviousTwo = fiboArray[i-1] + fiboArray[i-2];

        fiboArray.push(sumOfPreviousTwo);
        }
    
    return fiboArray[num-1];
    }
}




// Do not edit below this line
module.exports = fibonacci;
