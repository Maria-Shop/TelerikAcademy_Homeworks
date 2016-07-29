function SelectingSort(args) {
    var array, params, p, i, corrected;
    array = args[0].split('\n');
    params = array.slice(1, +array[0] + 1);
    p = 0;
    i = 0;
    corrected = false;
    if (array[0] >= 1 && array[0] <= 1024) {
        do {
            corrected = false;
            for (i = 1; i < params.length; i++) {
                if (+params[i] < +params[i - 1]) {
                    p = +params[i];
                    params[i] = +params[i - 1];
                    params[i - 1] = p;
                    corrected = true;
                }
            }
        } while (corrected);
        console.log(params.join('\n'));
    }
}
SelectingSort(['6\n3\n4\n1\n5\n2\n6']);
SelectingSort(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']);
