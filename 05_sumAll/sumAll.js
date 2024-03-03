const sumAll = function(start, end) {
    if (typeof start != "number" || typeof end != "number" || start < 0 || end < 0){
        return "ERROR";
    }
    if (start > end){
        const a = start;
        start = end;
        end = a;
    }
    // Solve for n (number of terms)
    const terms = end - (start - 1)
    // Solve for summation
    const sum = terms / 2 * ((2 * start) + (terms - 1));
    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
