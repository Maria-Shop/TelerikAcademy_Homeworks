function GetLargsetNumber(args) {
    var numbers = args[0].split(' ');
    var firstNum = +numbers[0],
        secondNum = +numbers[1],
        thirdNum = +numbers[2];

    if (thirdNum > getMax(firstNum, secondNum)) {
        return thirdNum;
    } else {
        return getMax(firstNum, secondNum);
    }

    function getMax(max1, max2) {
        if (max1 > max2) {
            return max1;
        } else {
            return max2;
        }
    }
}
console.log(GetLargsetNumber(['8 3 6']));
console.log(GetLargsetNumber(['7 19 19']));
