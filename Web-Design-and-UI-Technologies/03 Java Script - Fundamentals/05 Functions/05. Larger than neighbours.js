function LargerThanNeighbours(args) {
    var numbers = args[1].split(' ').map(Number),
        i, count = 0;
    for (i = 0; i <= numbers.length; i += 1) {
        if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
            count += 1;
        }
    }
    console.log(count);
}
LargerThanNeighbours(['6', '-26 -25 -28 31 2 27']);
LargerThanNeighbours(['6', '-26 -25 -28 31 2 27 2 3 1']);

// function LargerThanNeighbours(args) {
//     var numb= args[0].split('\n'),
//     numbers = numb[1].split(' ').map(Number), i, count=0;
//     for(i=0; i<=numbers.length; i+=1){
//       if(numbers[i]>numbers[i+1] && numbers[i]>numbers[i-1]){
//         count+=1;
//       }
//     }
//     console.log(count);
// }
// LargerThanNeighbours(['6\n-26 -25 -28 31 2 27']);
// LargerThanNeighbours(['6\n-26 -25 -28 31 2 27 2 3 1']);
