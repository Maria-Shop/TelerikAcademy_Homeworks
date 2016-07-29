function CircleAndRectangle(args) {
    var x = parseFloat(args[0]), y = parseFloat(args[1]),
        w = parseFloat(args[0]), h = parseFloat(args[1]),
        radius = 1.5, distance, distanceFromCenter,
        rectangle;
    if (1000 > x && x > -1000 && 1000 > y && y > -1000) {
        distance = Math.pow((x - 1), 2) + Math.pow((y - 1), 2);
        radius = Math.pow(radius, 2);
        distanceFromCenter = Math.sqrt(distance);
        rectangle = w*h;
        if (radius >= distance) {
            circleMsg = 'inside circle';
        } else {
            circleMsg = 'outside circle';
        }
        if (-1 <= w && w <= 5 && -1 <= h && h <= 1) {
            rectangleMsg = 'inside rectangle';
        } else {
            rectangleMsg = 'outside rectangle';
        }
        console.log(circleMsg + ' ' + rectangleMsg);
    } else {
        console.log('Out of the range');
    }
}
CircleAndRectangle([2.5, 2]);
CircleAndRectangle([0, 1]);
CircleAndRectangle([2.5, 1]);
CircleAndRectangle([1, 2]);
