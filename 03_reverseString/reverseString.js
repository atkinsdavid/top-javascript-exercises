const reverseString = function(string) {
    let strArr = string.split('');
    let revArr = strArr.reverse();
    let revStr = revArr.join('');
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
