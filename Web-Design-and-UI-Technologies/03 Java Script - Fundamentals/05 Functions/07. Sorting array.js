function sortingArray(args) {
  var arrayLength, array;
       arrayLength = +args[0];
       array = args[1].split(' ').map(Number);
    var sortedArray = array.sort(function (a, b) {
        return a - b;
    });
    return sortedArray.join(' ');
}

console.log(sortingArray(['6', '3 4 1 5 2 6']));
console.log(sortingArray(['10', '36 10 1 34 28 38 31 27 30 20']));
