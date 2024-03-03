let array = ["Hello", 2, "World", 4, 5];

const removeFromArray = function(array, ...elements) {
    for (const element of elements){
        while (array.includes(element)){
            array.splice(array.indexOf(element), 1);
        }
    }
    return array;
};

console.log(removeFromArray(array, "World"));

// Do not edit below this line
module.exports = removeFromArray;
