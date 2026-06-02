function solve(arr) {
    let username = arr[0];

    let password = username.split('').reverse().join('');

    let count = 0;

    for (let i =1; i < arr.length; i++) {
        let currentPassword = arr[i];

        if (currentPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            count++;

            if (count === 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);