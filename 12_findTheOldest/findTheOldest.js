const findTheOldest = function(arr) {

  arr.sort((a,b) => {

    const currentYear = new Date().getFullYear();
    let aDeathYear = a.yearOfDeath;
    let bDeathYear = b.yearOfDeath;

    console.log(currentYear);

    if (!a.yearOfDeath) {
      aDeathYear = currentYear;
    } else if (!b.yearOfDeath) {
      bDeathYear = currentYear;
    }
  

    return ((aDeathYear - a.yearOfBirth) - (bDeathYear - b.yearOfBirth));

  });
 
  return arr[arr.length-1];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
