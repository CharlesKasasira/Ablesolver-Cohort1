let sum = (a, b) => {
    if ( typeof a == 'undefined') return false;
    if ( typeof b == 'undefined') return false;
    return a + b;
}

let subtract = (num1, num2) => {
    if (typeof num1 != 'number') return false 
    if (typeof num2 != 'number') return false 
    return num1 - num2 
}

//Export on function
// module.exports = sum;
// export more than one function
module.exports = {
    sum,
    subtract
}


