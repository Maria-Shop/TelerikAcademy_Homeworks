function TheBiggest(args) {
    var a = +args[0], b = +args[1], c = +args[2];
    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (b > a) {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    } else {
        console.log(c);
    }
}
TheBiggest(['5', '2', '2']);
TheBiggest(['-2', '-2', '1']);
TheBiggest(['-2', '4', '3']);
TheBiggest(['0', '-2.5', '5']);
TheBiggest(['-0.1', '-0.5', '-1.1']);
