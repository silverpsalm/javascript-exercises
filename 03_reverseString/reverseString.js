const reverseString = function(string) {
// convert to array:
let getArray = string.split('');

// array we'll populate:
const reverseArray = [];

// loop for reversing:
for (i=0;i <= getArray.length; i++) {
    reverseArray.push(getArray[getArray.length-i]);
}
return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
