function AppearanceCount(args) {
    var searchedNumber = +args[2],
        numbers = args[1].split(' ').map(Number);
    return countTimes(numbers, searchedNumber);
    function countTimes(numArray, numberToSearch) {
        var i, len, count = 0;

        for (i = 0, len = numArray.length; i < len; i += 1) {
            if (numArray[i] === numberToSearch) {
                count += 1;
            }
        }
        return count;
    }
}
console.log(AppearanceCount(['8', '28 6 21 6 -7856 73 73 -56', '73']));

// function AppearanceCount(args) {
//     var numb = args[0].split('\n'),
//         searchedNumber = +numb[2].split('\n').map(Number),
//         numbers = numb[1].split(' ').map(Number);
//     return countTimes(numbers, searchedNumber);
//     function countTimes(numArray, numberToSearch) {
//         var i, len, count = 0;
//         for (i = 0, len = numArray.length; i < len; i += 1) {
//             if (numArray[i] === numberToSearch) {
//                 count += 1;
//             }
//         }
//         return count;
//     }
// }
// console.log(AppearanceCount(['8\n28 6 21 6 -7856 73 73 -56\n73']));
// console.log(AppearanceCount(['8\n6 8 3 93\n1']));
