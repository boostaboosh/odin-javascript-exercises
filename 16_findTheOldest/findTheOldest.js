const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear()
    return people.reduce((oldest, person) => 
    {
        if (getAge(person) > getAge(oldest)) return person
        else return oldest
    })
};

function getAge(person)
{
    if ("yearOfDeath" in person)
    {
        return person.yearOfDeath - person.yearOfBirth
    }
    else return new Date().getFullYear() - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
