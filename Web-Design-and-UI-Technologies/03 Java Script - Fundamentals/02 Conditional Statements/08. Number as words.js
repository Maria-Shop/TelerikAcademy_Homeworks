function NumberAsWord(args) {
    var number = parseInt(args[0]),
        temp = number,
        a, b, c, result;
    c = temp % 10;
    temp = Math.floor(temp / 10);
    b = temp % 10;
    temp = Math.floor(temp / 10);
    a = temp % 10;

    function Ones(cTemp, bTemp, aTemp) {
        if (bTemp != 1) {
            switch (cTemp) {
                case 1:
                    return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4:
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return "six";
                case 7:
                    return "seven";
                case 8:
                    return "eight";
                case 9:
                    return "nine";
                case 0:
                    if (aTemp == 0 && bTemp == 0) {
                        return "zero";
                    } else {
                        return "";
                    }
                    break;
                default:
                    return "How do you get here?";
            }
        } else {
            return "";
        }
    }

    function Tens(cTemp, bTemp) {
        if (bTemp == 1) {
            var tensTemp = 10 + cTemp;
            switch (tensTemp) {
                case 10:
                    return "ten";
                case 11:
                    return "eleven";
                case 12:
                    return "twelve";
                case 13:
                    return "thirteen";
                case 14:
                    return "fourteen";
                case 15:
                    return "fifteen";
                case 16:
                    return "sixteen";
                case 17:
                    return "seventeen";
                case 18:
                    return "eighteen";
                case 19:
                    return "nineteen";
                default:
                    break;
            }
        } else {
            switch (bTemp) {
                case 2:
                    return "twenty";
                case 3:
                    return "thirty";
                case 4:
                    return "forty";
                case 5:
                    return "fifty";
                case 6:
                    return "sixty";
                case 7:
                    return "seventy";
                case 8:
                    return "eighty";
                case 9:
                    return "ninety";
                case 0:
                    return "";
                default:
                    break;
            }
        }
    }

    function Hudreds(aTemp) {
        switch (aTemp) {
            case 1:
                return "one hundred";
            case 2:
                return "two hundred";
            case 3:
                return "three hundred";
            case 4:
                return "four hundred";
            case 5:
                return "five hundred";
            case 6:
                return "six hundred";
            case 7:
                return "seven hundred";
            case 8:
                return "eight hundred";
            case 9:
                return "nine hundred";
            case 0:
                return "";
            default:
                return "How do you get there";
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (a != "") {
        if (b == "" && c == "") {
            result = Hudreds(a);
        } else {
            result = Hudreds(a) + " and " + Tens(c, b) + " " + Ones(c, b, a);
        }
    } else {
        result = Hudreds(a) + " " + Tens(c, b) + " " + Ones(c, b, a);
    }

    console.log(capitalizeFirstLetter(result.trim().replace(/  +/g, ' ')));
}
NumberAsWord(['0']);
NumberAsWord(['9']);
NumberAsWord(['10']);
NumberAsWord(['12']);
NumberAsWord(['19']);
NumberAsWord(['25']);
NumberAsWord(['98']);
NumberAsWord(['273']);
NumberAsWord(['400']);
NumberAsWord(['501']);
NumberAsWord(['617']);
NumberAsWord(['711']);
NumberAsWord(['999']);
