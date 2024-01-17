const removeFromArray = function(array, toRemove) {
    //obtain index of element to be removed
    let index = array.indexOf(toRemove);
    //loop through array and build new array but skip the index of the element
    //to be removed. 
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(i === index) continue;
        newArray.push(array[i]);
    }
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
