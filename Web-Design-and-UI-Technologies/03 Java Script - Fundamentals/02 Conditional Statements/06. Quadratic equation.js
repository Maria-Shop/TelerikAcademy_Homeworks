function QuadraticEquation(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        discr, x1, x2;
    if (a !== 0) {
        discr = Math.pow(b, 2) - 4 * a * c;
        if (discr >= 0) {
            x1 = ((-b + Math.sqrt(discr)) / (2 * a)).toFixed(2);
            x2 = ((-b - Math.sqrt(discr)) / (2 * a)).toFixed(2);
            if (x1 == x2) {
                console.log("x1=x2=" + x2);
            } else {
                if (parseFloat(x1) < parseFloat(x2)) {
                    console.log("x1=" + x1 + "; x2=" + x2);
                } else {
                    console.log("x1=" + x2 + "; x2=" + x1);
                }
            }
        } else {
            console.log("no real roots");
        }
    } else if (b !== 0) {
        x1 = -c / b;
        console.log("x1=x2=" + x1);
    } else if (c === 0) {
        console.log("Every number is possible root for this equation");
    } else {
        console.log("This equation has no real root");
    }
}
QuadraticEquation(['2', '5', '-3']);
QuadraticEquation(['-1', '3', '0']);
QuadraticEquation(['-0.5', '4', '-8']);
QuadraticEquation(['5', '2', '8']);
QuadraticEquation(['0.2', '9.572', '0.2']);
