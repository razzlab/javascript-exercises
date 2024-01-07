const fibonacci = function (a) {
    let result = [0,1];
    if(a<0){return "OOPS"}
    for (i = 2; i <= a; i++) {
        result[i] = result[i-1]+result[i-2]
    }
    return Number(result[a])

};

// Do not edit below this line
module.exports = fibonacci;
