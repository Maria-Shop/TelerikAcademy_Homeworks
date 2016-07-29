function findSum(args) {
    var i, j, k, len,
        currSum = 0,
        sequence = '',
        sum = args.pop(),
        res = 0;
    console.log('Subset with sum: ' + sum);
    for (i = 0, len = args.length; i < len; i += 1) {
        currSum = args[i];
        for (j = i + 1; j < len; j += 1) {
            currSum += args[j];
            if (currSum === sum) {
                for (k = i; k <= j; k += 1) {
                    sequence += args[k] + ' ';
                    res += args[k];
                }
                if (res === sum) {
                    return 'yes' + '\n' + sequence + '\n';
                }
            }
        }
    }
    if (res !== sum) {
        return 'no' + '\n';
    }
}
console.log(findSum([2, 1, 2, 4, 3, 5, 2, 6, 14]));
console.log(findSum([2, 0, 0, 2, 3]));
console.log(findSum([1, 2, 5]));
console.log(findSum([8, 1, 2, 3, 0, 6]));
