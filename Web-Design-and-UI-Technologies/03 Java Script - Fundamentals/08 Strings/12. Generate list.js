var people = [{
    name: 'Peter',
    age: 14
}, {
    name: 'Anna',
    age: 19
}, {
    name: 'George',
    age: 36
}, {
    name: 'Max',
    age: 20
}];
var generateList = function(list, tmpl) {
    var result = '<ul>';
    var item;
    list.forEach(function(arg) {
        function replacer(match, i) {
            i = i.substring(2, i.length - 2);
            return arg[i];
        }
        item = '\n   <li>' + tmpl.replace(/(\-{[^{}]+}\-)/gm, replacer) + '\n   </li>';
        result += item;
    });
    result += '\n</ul>';
    return result;
};
var tmpl = '\n      <strong>-{name}-</strong> \n      <span>-{age}-</span>';
console.log(generateList(people, tmpl));
