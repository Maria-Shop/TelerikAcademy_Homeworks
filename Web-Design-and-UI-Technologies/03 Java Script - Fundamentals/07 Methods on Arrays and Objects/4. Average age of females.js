/*jshint esversion: 6 */
function makePerson(firstName, lastName, age, gender) {
    if (gender === true) {
        gender = 'female';
    } else {
        gender = 'male';
    }
    return {
        firstName,
        lastName,
        age,
        gender,
        toString: function() {
            return this.firstName + ' is ' + this.age + ' years old.';
        }
    };
}
let peoples = [
    Person1 = makePerson('Marian', 'Stoyanov', 30, false),
    Person2 = makePerson('Nikolay', 'Ivanov', 19, false),
    Person3 = makePerson('Maria', 'Petrova', 27, true),
    Person4 = makePerson('George', 'Georgiev', 20, false),
    Person5 = makePerson('Svetlin', 'Kostov', 23, false),
    Person6 = makePerson('Martina', 'Ivanova', 30, true),
    Person7 = makePerson('Ivan', 'Popov', 30, false),
    Person8 = makePerson('Mitko', 'Kirov', 30, false),
    Person9 = makePerson('Daniela', 'Ilieva', 16, true),
    Person10 = makePerson('Radoslav', 'Marinov', 30, false)
];

var Females = peoples.filter(function(person) {
    if (person.gender === 'female') {
        return person.age;
    }
});
Females.forEach(function(person) {
    console.log(person.toString());
});
var sumAge = Females.reduce(function(sumAge, person) {
    return sumAge + person.age;
}, 0);
var averageAge = (sumAge / Females.length).toFixed();
console.log('\n' + 'Average age is: ' + averageAge);
