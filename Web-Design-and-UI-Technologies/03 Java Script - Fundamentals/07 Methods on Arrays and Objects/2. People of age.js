/*jshint esversion: 6 */
function makePerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age
    };
}

let peoples = [
    Person1 = makePerson('Marian', 'Stoyanov', 30),
    Person2 = makePerson('Nikolay', 'Ivanov', 18),
    Person3 = makePerson('Maria', 'Petrova', 27),
    Person4 = makePerson('George', 'Georgiev', 20),
    Person5 = makePerson('Svetlin', 'Kostov', 23),
    Person6 = makePerson('Martina', 'Ivanova', 35),
    Person7 = makePerson('Ivan', 'Popov', 30),
    Person8 = makePerson('Mitko', 'Kirov', 30),
    Person9 = makePerson('Daniela', 'Ilieva', 33),
    Person10 = makePerson('Radoslav', 'Marinov', 30)//,Person11 = makePerson('Svetlin', 'Kostov', 17), //за да има поне 1 по-малък
];
var peopleOfAge =
    peoples.every(function(person) {
        return person.age >= 18;
    });
console.log('- Are there only people of age? ' + '\n' + (peopleOfAge === true ? '- Yes' : '- No'));
