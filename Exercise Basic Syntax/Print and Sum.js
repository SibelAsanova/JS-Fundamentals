function printAndSum(startNum, endNum) {
    let sum = 0;
    let output = '';

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        output += i + ' ';
    }
    console.log(output);
    console.log('Sum: ' +sum);
}
printAndSum(5, 10);