function LargerThanNeighbours(args) {
    var numbers = args[1].split(' ').map(Number),
        i, index = 0,
        count=0;
    for (i = 0; i <= numbers.length; i += 1) {
        if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
            index = numbers.indexOf(numbers[i]);
            console.log(index);
            break;
        } else if (!(numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1])) {
            count++;
        }
    }
    if (index === 0 && count !== 0) {
        console.log('-1');
    }
}
LargerThanNeighbours(['6', '-26 -25 -28 31 2 27']);
LargerThanNeighbours(['6', '-24 -25 -28 31 2 27 2 3 1']);
LargerThanNeighbours(['2', '1 2 3 4']);

// function LargerThanNeighbours(args) {
//     var numb= args[0].split('\n'), numbers = numb[1].split(' ').map(Number),
//         i, index = 0,
//         count=0;
//     for (i = 0; i <= numbers.length; i += 1) {
//         if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
//             index = numbers.indexOf(numbers[i]);
//             console.log(index);
//             break;
//         } else if (!(numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1])) {
//             count++;
//         }
//     }
//     if (index === 0 && count !== 0) {
//         console.log('-1');
//     }
// }
// LargerThanNeighbours(['6\n-26 -25 -28 31 2 27']);
// LargerThanNeighbours(['6\n-24 -25 -28 31 2 27 2 3 1']);
// LargerThanNeighbours(['2\n1 2 3 4']);
