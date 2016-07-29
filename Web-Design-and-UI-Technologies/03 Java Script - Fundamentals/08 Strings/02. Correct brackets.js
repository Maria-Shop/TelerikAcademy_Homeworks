function correctBrackets(str) {
    var string = str[0].split('');
    var count1 = 0,
        count2 = 0;
    for (var i in string) {
        if (string[i] == '(') {
            count1 += 1;
        } else if (string[i] == ')') {
            count2 += 1;
        }
    }
    if (count1 == count2) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
}
correctBrackets(['((a+b)/5-d)']);
correctBrackets([')(a+b))']);
