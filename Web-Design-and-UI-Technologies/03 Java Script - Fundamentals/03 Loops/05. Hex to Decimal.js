function HexToDecimal(params) {
    var hex = params[0];
    var res = 0;
    var sixTeen = 1;

    for (var i = hex.length - 1; i >= 0; i -= 1) {
        var chNow = hex[i];
        if (+chNow >= 0 && +chNow < 10) {
            res += +chNow * sixTeen;
            sixTeen *= 16;
        } else if (chNow == 'A') {
            res += 10 * sixTeen;
            sixTeen *= 16;
        } else if (chNow == 'B') {
            res += 11 * sixTeen;
            sixTeen *= 16;
        } else if (chNow == 'C') {
            res += 12 * sixTeen;
            sixTeen *= 16;
        } else if (chNow == 'D') {
            res += 13 * sixTeen;
            sixTeen *= 16;
        } else if (chNow == 'E') {
            res += 14 * sixTeen;
            sixTeen *= 16;
        } else if (chNow == 'F') {
            res += 15 * sixTeen;
            sixTeen *= 16;
        }
    }
    console.log(res);
}
HexToDecimal(['FE']);
HexToDecimal(['1AE3']);
HexToDecimal(['4ED528CBB4']);
