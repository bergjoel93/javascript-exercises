const sumAll = function(start, end) {
    //check to see if any arguments are negative. 
    if(start < 0 || end < 0) return 'ERROR';
    //check to see if start and end are integers.
    if(!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';

    let sum = 0;
    if (start < end){
        sum = secondLarger(start, end);
    }

    if(start > end){
        sum = firstLarger(start, end);
    }

    function secondLarger(start, end) {
        let sum = 0;
        for(let i = start; i <= end; i++){
            sum = sum +i;
        }
        return sum;
    }

    function firstLarger(start, end){
        let sum = 0;
        for(let i = end; i <= start; i++){
            sum = sum +i;
        }
        return sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
