/*jshint esversion: 6 */
function makePerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        toString: function() {
            return this.firstName + ' is ' + this.age + ' years old';
        }
    };
}

let peoples = [
    Person1 = makePerson('Marian', 'Stoyanov', 16),
    Person2 = makePerson('Nikolay', 'Ivanov', 18),
    Person3 = makePerson('Maria', 'Petrova', 27),
    Person4 = makePerson('George', 'Georgiev', 20),
    Person5 = makePerson('Svetlin', 'Kostov', 17),
    Person6 = makePerson('Martina', 'Ivanova', 35),
    Person7 = makePerson('Ivan', 'Popov', 30),
    Person8 = makePerson('Mitko', 'Kirov', 16),
    Person9 = makePerson('Daniela', 'Ilieva', 33),
    Person10 = makePerson('Radoslav', 'Marinov', 30)
];

var peopleOfAge = peoples.filter(function(person) {
        return person.age < 18;
    })
    .forEach(function(person) {
        console.log(person.toString());
    });
