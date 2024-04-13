const toRemove = [" ", ",", ".", "!", "?"]

const palindromes = function (string) {
    const toArray = string.split('')
    .filter((char)=>!toRemove.includes(char))
    .map((char)=>char.toLowerCase());
    
    for(let i = 0, n = toArray.length - 1; i < n; i++, n--){
        if (toArray[i] !== toArray[n]){
            return false;
        }
    }
    return true;
};

console.log(palindromes("ZZZZ car, a man, a maracaz."));

// Do not edit below this line
module.exports = palindromes;
