function CheckNumber(number) {
    var isOdd = false;
    if (number % 2 !== 0) {
        isOdd = true;
    }
    if (isOdd) {
        return console.log('odd ' + number);
    } else {
        return console.log('even ' + number);
    }
}
CheckNumber(['3']);
CheckNumber(['2']);
CheckNumber(['-2']);
CheckNumber(['-1']);
CheckNumber(['-']);
