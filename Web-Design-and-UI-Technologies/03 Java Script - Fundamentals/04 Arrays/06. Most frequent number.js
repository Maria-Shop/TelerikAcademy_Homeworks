function MostFrequentNumber(args) {
    var i, j, frequentNum, count, maxCount, numbers, len;
    count = 1;
    maxCount = 1;
    numbers = args[0].split('\n').map(Number);
    len = numbers.length;
    if (numbers[0] >= 1 && numbers[0] <= 1024) {
        for (i = 0; i < len; i += 1) {
            if (numbers[i] >= 0 && numbers[i] <= 10000) {
                for (j = i + 1; j < len; j += 1) {
                    if (numbers[i] === numbers[j]) {
                        count += 1;
                        if (count > maxCount) {
                            maxCount = count;
                            frequentNum = numbers[j];
                        }
                    }
                }
                count = 1;
            }
        }
        return frequentNum + ' (' + maxCount + ' times)';
    }
}
console.log(MostFrequentNumber(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']));
