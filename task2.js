function findDivis(numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let num = numbers[i];
        while (num !== 0) {
            let temp = num;
            num = result % num;
            result = temp;
        }
    }

    if (result === 1) {
        return;
    }

    let numDivis = [];

    for (let i = 2; i <= result; i++) {
        if (result % i === 0) {
            numDivis.push(i);
        }
    }

    return numDivis;
}

let numbers = [42, 12, 18];
console.log(findDivis(numbers)); 
