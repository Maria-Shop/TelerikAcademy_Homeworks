function MMSA(args) {
    var i, len, min, max, avg,
        a = +args[0],
        b = +args[1],
        c = +args[2];
    min = +args[0];
    max = +args[0];
    sum = 0;
    len = args.length;
    for (i = 0; i < len; i += 1) {
        if (+args[i] >= max) {
            max = +args[i];
        }
        if (+args[i] <= min) {
            min = +args[i];
        }
        sum += +args[i];
    }
    avg = sum / len;
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
MMSA(['2', '5', '1']);
MMSA(['2', '-1', '4']);
