function TheBiggest(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4],
        biggest = a;

    if (b >= a) {
        biggest = b;
    }
    if (c >= a && c >= b) {
        biggest = c;
    }
    if (d >= a && d >= b && d >= c) {
        biggest = d;
    }
    if (e >= a && e >= b && e >= c && e >= d) {
        biggest = e;
    }
    console.log(biggest);
}
TheBiggest(['5', '2', '2', '4', '1']);
TheBiggest(['-2', '-22', '1', '0', '0']);
TheBiggest(['-2', '4', '3', '2', '0']);
TheBiggest(['0', '-2.5', '0', '5', '5']);
TheBiggest(['-3', '-0.5', '-1.1', '-2', '-0.1']);
