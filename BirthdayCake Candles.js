/*You are in-charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age.
 When she blows out the candles, she’ll only be able to blow out the tallest ones.

For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out candles 
successfully, since the tallest candle is of height  and there are  such candles.

Complete the function birthdayCakeCandles that takes your niece's age and an integer array containing height of each candle as input, and 
return the number of candles she can successfully blow out. */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the birthdayCakeCandles function below.
 */
function birthdayCakeCandles(n, ar) {
    /*
     * Write your code here.
     */
    var count = 0;
    var maxVal = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > maxVal) {
            maxVal = ar[i];
        }
    }
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === maxVal) {
            count += 1;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(n, ar);

    ws.write(result + "\n");

    ws.end();
}