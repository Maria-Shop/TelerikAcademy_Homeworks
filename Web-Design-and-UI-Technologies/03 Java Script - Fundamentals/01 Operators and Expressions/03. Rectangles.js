function Rectangle(args) {
    var w = +args[0],
        h = +args[1],
        area = w * h,
        perimeter = w * 2 + h * 2;
    return console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}
Rectangle(['2.5', '3']);
Rectangle(['5', '5']);
Rectangle(['3', '4']);
