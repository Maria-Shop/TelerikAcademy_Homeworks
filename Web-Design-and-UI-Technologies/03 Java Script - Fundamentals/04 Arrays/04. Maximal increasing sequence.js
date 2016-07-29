function MaxIncreasingSeq(args) {
    var i, len, count, minCount, numbers;
    count = 1;
    minCount = 0;
    numbers = args[0].split('\n').map(Number);
    len = numbers.length;
    if (numbers[0] >= 1 && numbers[0] <= 1024) {
        for (i = 1, len; i < len; i += 1) {
            if (numbers[i] < numbers[i + 1]) {
                count += 1;
                if (count > minCount) {
                    minCount = count;
                }
            } else {
                count = 1;
            }
        }
        return minCount;
    }
}
console.log(MaxIncreasingSeq(['8\n7\n3\n2\n3\n4\n2\n2\n4']));
