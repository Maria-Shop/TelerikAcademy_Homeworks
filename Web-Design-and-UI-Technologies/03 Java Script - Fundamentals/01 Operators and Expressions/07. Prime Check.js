function PrimeCheck(args) {
    var number = parseInt(args[0]);
    var isPrime = true;
    if (args < 2 || args >= 100) {
        console.log(false);
    } else {
        for (var i = 2, range = number / 2; i <= range; i++) {
            if (number % i === 0) {
                isPrime = false;
            }
        }
        console.log(isPrime);
    }
}
PrimeCheck('2');
PrimeCheck('23');
PrimeCheck('-3');
PrimeCheck('0');
PrimeCheck('1');
