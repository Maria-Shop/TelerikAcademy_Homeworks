function ThirdDigit(number) {
    number = number.toString();
    if (number.length >= 3) {
        var res = number.charAt(number.length - 3);
        if (res == 7) {
            console.log('true');
        } else {
            console.log('false' + ' ' + res);
        }
    } else {
        console.log('false' + ' ' + '0');
    }
}
ThirdDigit(['5']);
ThirdDigit(['701']);
ThirdDigit(['9703']);
ThirdDigit(['877']);
ThirdDigit(['777877']);
ThirdDigit(['9999799']);
