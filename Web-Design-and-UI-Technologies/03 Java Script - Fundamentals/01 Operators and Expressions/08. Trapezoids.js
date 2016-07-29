//	area=h*((a+b)/2)
function Trapezoids(args) {
    var a = +args[0],
        b = +args[1],
        h = +args[2],
        area = h * ((a + b) / 2);
    return console.log(area.toFixed(7));
}
Trapezoids(['5', '7', '12']);
Trapezoids(['2', '1', '33']);
Trapezoids(['8.5', '4.3', '2.7']);
Trapezoids(['100', '200', '300']);
Trapezoids(['0.222', '0.333', '0.555']);
