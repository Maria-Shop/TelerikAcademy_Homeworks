function maxSequence(args) {
    var i, len, count, maxCount, numbers;
    count = 1;
    maxCount = 0;
    numbers = args[0].split('\n').map(Number);
    len = numbers.length;
    if (numbers[0] >= 1 && numbers[0] <= 1024) {
        for (i = 1, len; i < len; i += 1) {
            if (numbers[i] === numbers[i + 1]) {
                count += 1;
                if (count > maxCount) {
                    maxCount = count;
                }
            } else {
                count = 1;
            }
        }
        return maxCount;
    }
}
console.log(maxSequence(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']));
