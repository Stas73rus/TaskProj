function comp(n) {
    let ost1 = n % 10;
    let ost2 = n % 100;
    let s = n.toString() + ' ';
    if ((11 <= ost2 && ost2 <= 19) || ost1 === 0 || (5 <= ost1 && ost1 <= 9)) {
        return s + 'компьютеров';
    } else if (ost1 === 1) {
        return s + 'компьютер';
    } else if (2 <= ost1 && ost1 <= 4) {
        return s + 'компьютера';
    }
}

console.log(comp(parseInt(prompt())));
// Для проверки
for (let n = 0; n < 1000; n++) {
    console.log(n, comp(n));
}
