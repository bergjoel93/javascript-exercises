const palindromes = function (str) {
    newStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    let strArray = Array.from(newStr);
    let reversed = Array.from(strArray).reverse(); // Create a copy and then reverse. 

    let originalStr = strArray.join('');
    
    let reversedStr = reversed.join('');

    console.log(originalStr);
    console.log(reversedStr);
    if(originalStr === reversedStr) return true;
    else return false;

};

console.log(palindromes('racecar!'));


// Do not edit below this line
module.exports = palindromes;
