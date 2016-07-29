function findSum(args) {
    var i, j, k, len,
        currSum = 0,
        sequence = '',
        sum = args.pop();
    console.log('sum: '+sum);
    for (i = 0, len = args.length; i < len; i += 1) {
        currSum = args[i];
        for (j = i + 1; j < len; j += 1) {
            currSum += args[j];
            if (currSum === sum) {
                for (k = i; k <= j; k += 1) {
                    sequence += args[k] + ' ';
                }
                console.log(sequence);
                break;
            }
        }
    }
}
findSum([4, 3, 1, 4, 2, 5, 8, 11]);
