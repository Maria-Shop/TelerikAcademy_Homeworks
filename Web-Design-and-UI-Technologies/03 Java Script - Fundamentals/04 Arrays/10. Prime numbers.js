function maxPrime(number) {
    var i, divider, maxPrime = 2;
    if (number >= 2 && number <= 10000000) {
        for (i = number; i >= 2; i -= 1) {
            var isPrime = true;
            for (divider = 2; divider * divider <= number; divider += 1) {
                if (i % divider === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                maxPrime = i;
                break;
            }
        }
        return maxPrime | 0;
    }
}
console.log(maxPrime(13));
console.log(maxPrime(126));
console.log(maxPrime(26));
