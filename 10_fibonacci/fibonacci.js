const fibonacci = function(num) {
    if(!Number.isInteger(num)) num = Number(num);
    if(num===0) return 0;
    if(num < 0) return "OOPS";
    let fib = [1,1];
    for(let i = 2; i < num; i++){
        
        fib[i] = fib[i - 2] + fib[i-1];
    }
    return fib[fib.length-1];
};


// Do not edit below this line
module.exports = fibonacci;
