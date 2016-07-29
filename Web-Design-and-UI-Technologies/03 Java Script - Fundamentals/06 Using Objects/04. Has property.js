var obj = {
        name: 'Ivan',
        age: '25',
        eyes: 'blue',
        hair: 'brown'
    };

function hasProperty(obj,hasProp){
  for (var prop in obj){
    if(prop==hasProp){
      return true;
    }else{
      return false;
    }
  }
}

console.log("Object contains property 'name' - "+obj.hasOwnProperty('name'));
console.log("Object contains property 'email' - "+obj.hasOwnProperty('email'));
console.log("Object contains property 'age' - "+obj.hasOwnProperty('age'));
console.log("Object contains property 'car' - "+obj.hasOwnProperty('car'));
