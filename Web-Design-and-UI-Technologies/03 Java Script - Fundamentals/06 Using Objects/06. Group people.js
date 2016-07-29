/*jshint esversion: 6 */
var people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];


function Test(){
  var GroupPerson = {};
for (const person of people) {
    if (!GroupPerson[person.age]) {
        GroupPerson[person.age] = [person];
    }
    else{
        GroupPerson[person.age].push(person);
    }
    console.log(GroupPerson);
}

}
