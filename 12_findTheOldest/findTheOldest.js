const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
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

const findTheOldest = function(array) {
  let oldest = 0;
  let index = 0;

  for (let i = 0; i < array.length; i++){
    if(array[i]["yearOfDeath"] === undefined){
     array[i]["yearOfDeath"] = new Date().getFullYear();
    }
    if(array[i]["yearOfDeath"] - array[i]["yearOfBirth"] > oldest){
      oldest = array[i]["yearOfDeath"] - array[i]["yearOfBirth"];
      index = i;
    }
  }
  return array[index]
};

console.log(findTheOldest(people).name);


// Do not edit below this line
module.exports = findTheOldest;
