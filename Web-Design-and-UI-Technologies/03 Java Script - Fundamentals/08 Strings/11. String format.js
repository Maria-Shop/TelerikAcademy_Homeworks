var stringFormat = function(str) {
    var args;// = arguments;

    function replacer(match, i) {
        var index = (1 + parseInt(i)).toString();
        return args[index];
    }
    str = str.replace(/{([0-9]+)}/gm, replacer);
    return str;
};
var frmt = '{0}, {1}, {0} text {2}';
console.log(stringFormat(frmt, 1, 'Pesho', 'Gosho'));
console.log(stringFormat('Hello {0}!', 'Peter'));
