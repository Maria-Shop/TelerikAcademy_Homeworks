function MultiplicationSign(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    if ((a < 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c > 0) || (b < 0 && a > 0 && c > 0) || (c < 0 && a > 0 && b > 0)) {
        console.log("-");
    } else {
        if (a === 0 || b === 0 || c === 0) {
            console.log("0");
        } else {
            console.log("+");
        }
    }
}
MultiplicationSign(['5', '2', '2']);
MultiplicationSign(['-2', '-2', '1']);
MultiplicationSign(['-2', '4', '3']);
MultiplicationSign(['0', '-2.5', '4']);
MultiplicationSign(['-1', '-0.5', '-5.1']);
