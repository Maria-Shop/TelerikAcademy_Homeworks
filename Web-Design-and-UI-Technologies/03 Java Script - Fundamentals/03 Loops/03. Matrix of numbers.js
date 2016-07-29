function Matrix(args) {
    var i, j, result, N;
        result = '';
        N=+args[0];
    for (i = 0; i < N; i += 1) {
        for (j = i + 1; j <= N + i; j += 1) {
            result += j + ' ';
        }
        result += '\n';
    }
    console.log(result);
}
Matrix(['2']);
Matrix(['3']);
Matrix(['4']);
