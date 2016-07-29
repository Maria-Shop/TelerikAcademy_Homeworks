function deepCopy(obj) {
    var clone = {};
    if (obj === null || typeof(obj) !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.slice();
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            clone[prop] = obj[prop];
        }
    }
    return clone;
}

var person = {
    name: 'Ivan',
    age: 25,
    like: 'icecream',
    position: 'student',
    toString: function() {
        console.log(this.name + ' is ' + this.age + ' years old. \nHe is a ' + this.position + ' and he likes ' + this.like+'\n');
    }
};
var clonePerson = deepCopy(person);
person.toString();
clonePerson.name = 'Stoian';
clonePerson.like = 'marshmallow';
clonePerson.toString();
