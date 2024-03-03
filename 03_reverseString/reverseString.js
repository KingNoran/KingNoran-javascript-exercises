const reverseString = function(string) {
    let reversedString = "";
    for(let i = string.length; i >= 0; i--){
        reversedString += string.charAt(i - 1);
    }
    return reversedString;
};

console.log(reverseString("String"));

// Do not edit below this line
module.exports = reverseString;
