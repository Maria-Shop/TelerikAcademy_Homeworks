function permute(input) {
    var permArr = [],
        usedChars = [];
    var p = 1,
        list = [];
    while (p <= input) {
        list.push(p++);
        p = p++;
    }
    reversedArr = list.reverse();
    var permArray = (function main() {
        for (var i = 0; i < reversedArr.length; i++) {
            var ch = reversedArr.splice(i, 1)[0];
            usedChars.push(ch);
            if (reversedArr.length === 0) {
                permArr.push(usedChars.slice());
            }
            main();
            reversedArr.splice(i, 0, ch);
            usedChars.pop();

        }
        return permArr;
    })();

    for (var i = 0; i < permArray.length; i++) {

        var t = [];
        for (var j = 0; j < permArray[i].length; j++) {
            t.push(permArray[i][j]);
        }
        console.log('{' + t + '}');
    }
}
permute(3);
