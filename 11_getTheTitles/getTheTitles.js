const getTheTitles = function(objectArray) {
    result = [];
    for(let i = 0; i < objectArray.length; i++){
        result[i] = objectArray[i].title;
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
