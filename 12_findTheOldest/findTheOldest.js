//  .reduce() = reduce the elements of an arry to a single value. 
const findTheOldest = function(people) {

    // oldestPerson 
    let oldestPerson = people.reduce(oldest, people[0]); // reduce(function['oldest], first person in array.)
    // In this function (oldest()) the accumulator represents the previous person object in the array and the element represents the current person iterated through in the object array. 
    function oldest(previousPerson, currentPerson) {
        // code to be executed 
        let currentYear = new Date().getFullYear(); //actual current year. 
        // agePreviousPerson is conditional. If yearOfDeath exists then it's yearOfDeath - yearOfBirth. If it doesn't exist then it's currentYear - yearOfDeath. 
        let agePreviousPerson = ('yearOfDeath' in previousPerson) ? previousPerson.yearOfDeath - previousPerson.yearOfBirth : currentYear - previousPerson.yearOfBirth; 
        let ageCurrentPerson = ('yearOfDeath' in currentPerson) ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : currentYear - currentPerson.yearOfBirth;

        if(ageCurrentPerson > agePreviousPerson){
            previousPerson = currentPerson;
        }

        return previousPerson;
        
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
