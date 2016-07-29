function Increase(args) {
    var N = +args[0],
        arr = [],
        i;
    if (N >= 1 && N <= 20) {
        for (i = 0; i < N; i++) {
            arr[i] = i * 5;
            console.log(arr[i]);
        }
    } else {
        console.log('N is out of range');
    }
}
Increase(['5']);
Increase(['21']);
