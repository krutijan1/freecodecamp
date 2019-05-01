function isPrimeNumber(number) {
    const limit = number >> 1;
    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrimeNumber(i)) {
            sum += i;
        }
    }
    return sum;
}

sumPrimes(10);
