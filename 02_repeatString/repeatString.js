const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    let concatted = "";
    for (let i = 0; i < num; i++){
        concatted += string;
    }
    return concatted;
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
