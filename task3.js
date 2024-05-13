function findPrime(start, end) {
    let primeNumbers = [];
    for (let number = start; number <= end; number++) {
        if (number > 1) {
            let checkPoint = true
            for (let d = 2; d <= Math.sqrt(number); d++) {
                if (number % d === 0) {
                    checkPoint = false
                    break;
                }
            }
            if (checkPoint)
                primeNumbers.push(number);
        }
    }
    return primeNumbers;
}

console.log(findPrime(11, 20));