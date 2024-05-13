function tableOut(n) {
    let s = ' '.repeat(String(n).length);
    // Первая строка
    for (let i = 1; i <= n; i++) {
        s += ' '.repeat(String(i * n).length + 1 - String(i).length) + i;
    }
    console.log(s);
    // Остальная часть
    for (let i = 1; i <= n; i++) {
        s = ' '.repeat(String(n).length - String(i).length) + i;
        for (let j = 1; j <= n; j++) {
            s += ' '.repeat(String(j * n).length + 1 - String(i * j).length) + i * j;
        }
        console.log(s);
    }
}

tableOut(10);
