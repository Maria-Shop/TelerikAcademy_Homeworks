function EnglishDigit(arg) {
    var number = arg[0],
    c = number % 10;
    function Ones(c) {
        if (arg >=0) {
            switch (c) {
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
                    return "zero";
                default:
                    return "No numbers";
            }
        } else if (arg != Number) {
            return "This is not a number";
        }
    }
    console.log(Ones(c));
}
EnglishDigit([42]);
EnglishDigit([420]);
EnglishDigit([5]);
EnglishDigit([]);
EnglishDigit(['l']);
