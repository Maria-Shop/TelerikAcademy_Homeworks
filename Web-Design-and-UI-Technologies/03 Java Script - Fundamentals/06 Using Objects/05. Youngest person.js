function youngestPerson(args) {
    var i, j, len, youngest,
        person = {},
        people = [];
    for (i = 0, len = args.length; i < len; i += 3) {
        person = createPerson(args[i], args[i + 1], +args[i + 2]);
        people.push(person);
    }
    youngest = people[0];
    for (i = 0; i < people.length; i += 1) {
        if (people[i].age < youngest.age) {
            youngest = people[i];
        }
    }
    return youngest.firstname + ' ' + youngest.lastname;
    function createPerson(firstname, lastname, age) {
        return {
            firstname: firstname,
            lastname: lastname,
            age: age
        };
    }
}
console.log(youngestPerson(
    [
        'Gosho', 'Petrov', '32',
        'Bay', 'Ivan', '81',
        'John', 'Doe', '42'
    ]
));
console.log(youngestPerson(
    [
        'Penka', 'Hristova', '61',
        'System', 'Failiure', '88',
        'Bat', 'Man', '16',
        'Malko', 'Kote', '72'
    ]
));
