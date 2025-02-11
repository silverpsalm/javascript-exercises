const findTheOldest = function(arr) {

  arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
 
  return arr[arr.length-1];
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

//   findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
