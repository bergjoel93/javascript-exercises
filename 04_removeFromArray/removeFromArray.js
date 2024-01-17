const removeFromArray = function() {
    // assign the first argument as the original array. 
    let array = arguments[0];
    let result = []; //create an empty results array. 

    // loop through each element in the array. 
    for(let i = 0; i < array.length; i++){
        let shouldRemove = false;

        //Check if this element should be removed
        for(let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]){
                shouldRemove = true;
                break;
            }
        }

        // If the element should not be removed, add it to the result array
        if(!shouldRemove) {
            result.push(array[i]);
        }
    }
    return result;
};



// Do not edit below this line
module.exports = removeFromArray;
