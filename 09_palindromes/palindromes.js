const palindromes = function (getString) {
   //  let lower = getString.toLowerCase();
   //  let str = lower.replace(/\W|_/g,'').split('');
   //  let reverse = [];

   //  // reversed to new array 
   //  for (i=str.length;i >= 0; i--) {
   //     reverse.push(str[i]);
   //  }

   //  let strJoined = str.join('');
   //  let revJoined = reverse.join('');
    
   //    if (revJoined == strJoined) {return true;} 
   //    else { return false;}
   const str = getString
                  .toLowerCase()
                  .replace(/\W|_/g,'')
                  .split('')
                  .join('');
   const revStr = str
                  .split('')
                  .reverse()
                  .join('');
   return str === revStr;
};

// Do not edit below this line
module.exports = palindromes;
