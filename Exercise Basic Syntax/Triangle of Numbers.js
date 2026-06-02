function triangleOfNums(n) {
    if ( n < 1 || n > 20) {
        return;
    }
   
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}
triangleOfNums(5);