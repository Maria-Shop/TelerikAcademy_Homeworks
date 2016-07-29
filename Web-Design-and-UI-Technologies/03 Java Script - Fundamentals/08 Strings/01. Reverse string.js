function reverseString(str) {
    var string = str[0];
    for (var i in string) {
        var reversedString = string.split('').reverse().join('');
        console.log(reversedString);
        break;
    }
}

// function reverseString(str) {
//     var string = str[0];
//     console.log(reverse(string));
//     function reverse(someString) {
//         return someString.split('').reverse().join('');
//     }
// }

reverseString(['sample']);
reverseString(['qwertytrewq']);
