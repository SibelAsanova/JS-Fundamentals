function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;

    while (base > 0) {
        steps++;

        if (base <= 2) {
            gold += base * base * increment;
            break;
        }

        let innerArea = (base - 2) * (base - 2);
        let outerArea = base * base - innerArea;

        stone += innerArea * increment;
        if (steps % 5 === 0) {
            lapis += outerArea * increment;

        } else {
            marble += outerArea * increment;
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
solve(11, 1);