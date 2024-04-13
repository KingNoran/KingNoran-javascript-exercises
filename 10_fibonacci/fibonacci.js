const fibonacci = function(num) {

    if (typeof(num) !== Number){
        Number(num);
    } 

    if (num == 0){
        return 0;
    }

    if (num < 0){
        return "OOPS";
    }

    let acc = 1, prev = 0;

    for (let i = 0; i < (num - 1); i++){
        acc = acc + prev;
        prev = acc - prev;
    }
    
    return acc;
};

console.log(fibonacci("0"));

// Do not edit below this line
module.exports = fibonacci;
