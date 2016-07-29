function planarCoordinates(args) {
    var i, len, pointA, pointB, line,
        linesArray = [],
        input = args.map(Number);
    for (i = 0, len = input.length; i < len; i += 4) {
        pointA = createPoint(input[i], input[i + 1]);
        pointB = createPoint(input[i + 2], input[i + 3]);
        line = createLine(pointA, pointB);
        console.log((line.length).toFixed(2));
        linesArray.push(line);
    }
    console.log(isTriangle(linesArray[0], linesArray[1], linesArray[2]));

     function createPoint(x, y) {
        return {
            x: x,
            y: y
        };
    }
    function createLine(pointA, pointB) {
        return {
            pointA: pointA,
            pointB: pointB,
            length: lineDistance(pointA, pointB)
        };
    }
    function lineDistance(pA, pB) {
        var length;
        length = Math.sqrt((pB.x - pA.x) * (pB.x - pA.x) + (pB.y - pA.y) * (pB.y - pA.y));
        return length;
    }
    function isTriangle(lineA, lineB, lineC) {
        lA = lineA.length;
        lB = lineB.length;
        lC = lineC.length;
        if ((lA + lB) > lC && (lB + lC) > lA && (lA + lC) > lB) {
            return 'Triangle can be built';
        } else {
            return 'Triangle can not be built';
        }
    }
}
planarCoordinates(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12']);
planarCoordinates(['7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.5', '0', '-0.123']);
