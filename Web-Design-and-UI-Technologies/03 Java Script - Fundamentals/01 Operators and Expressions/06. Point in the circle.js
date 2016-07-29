function PointInTheCircle(args) {
    var x = parseFloat(args[0]),
        y = parseFloat(args[1]),
        radius = 2,
        distance, distanceFromCenter;
    if (1000 > x && x > -1000 && 1000 > y && y > -1000) {
        distance = Math.pow(x, 2) + Math.pow(y, 2);
        radius = Math.pow(radius, 2);
        distanceFromCenter = Math.sqrt(distance);
        if (radius >= distance) {
            console.log('yes ' + distanceFromCenter.toFixed(2));
        } else {
            console.log('no ' + distanceFromCenter.toFixed(2));
        }
    } else {
        console.log('Out of the range');
    }
}
PointInTheCircle(['-2', '0']);
PointInTheCircle(['-1', '2']);
PointInTheCircle(['1.5', '0']);
PointInTheCircle(['-1.5', '-1.5']);
PointInTheCircle(['100', '-30']);
PointInTheCircle(['0', '0']);
PointInTheCircle(['1001', '1001']);
