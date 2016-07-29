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
    Person9 = makePerson('Daniela', 'Ilieva', 30, true),
    Person10 = makePerson('Radoslav', 'Marinov', 30, false)
];

// console.log(Person1.firstName + ' is ' + Person1.gender);
// console.log(Person6.firstName + ' is ' + Person6.gender);

for (var i in peoples) {
    console.log(peoples[i].firstName + ' is ' + peoples[i].gender);
}
