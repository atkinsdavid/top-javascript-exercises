const sumAll = function(one,two) {
    if (!Number.isInteger(one) || !Number.isInteger(two) || one < 0 || two < 0){
        return 'ERROR';
    };
    let sum = 0;
    if (one > two) {
        for (i = two; i <= one; i++) {
            sum += i;
        };
    } else {
        for (i = one; i <= two; i++) {
            sum += i;
        };
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
