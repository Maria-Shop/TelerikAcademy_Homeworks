function SortNumbers(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        result;
    if (a > b) {
        if (b >= c) {
            result = a + " " + b + " " + c;
        } else if (a <= c) {
            result = c + " " + a + " " + b;
        } else {
            result = a + " " + c + " " + b;
        }
    } else if (b >= c) {
        if (a >= c) {
            result = b + " " + a + " " + c;
        } else {
            result = b + " " + c + " " + a;
        }
    } else {
        result = c + " " + b + " " + a;
    }
    console.log(result);
}
SortNumbers(['5', '1', '2']);
SortNumbers(['-2', '4', '3']);
SortNumbers(['0', '-2.5', '5']);
SortNumbers(['-1.1', '-0.5', '-0.1']);
SortNumbers(['10', '20', '30']);
SortNumbers(['1', '1', '1']);
