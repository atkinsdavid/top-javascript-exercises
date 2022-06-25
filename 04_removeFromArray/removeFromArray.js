const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if(!args.includes(item)) { 
            newArray.push(item);
        };
    });
    return newArray;
    
    // from the solution: "A simpler, but more advanced way to do it is to use the 'filter' function,
    // which basically does what we did with the forEach above.

    // var removeFromArray = function(...args) {
    //   const array = args[0]
    //   return array.filter(val => !args.includes(val))
    // }
    //"
};

// Do not edit below this line
module.exports = removeFromArray;
