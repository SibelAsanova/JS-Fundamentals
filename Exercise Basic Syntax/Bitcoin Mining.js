function solve(input) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;

    let money = 0;
    let bitcoins = 0;
    let firstBitcoinDay = 0;

    for (let i = 0; i < input.length; i++) {
        let gold = input[i];

        // всеки 3-ти ден крадат 30%
        if ((i + 1) % 3 === 0) {
            gold *= 0.70;
        }

        money += gold * goldPrice;

        // купуваме колкото биткойни можем
        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitcoins++;

            if (firstBitcoinDay === 0) {
                firstBitcoinDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (firstBitcoinDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}