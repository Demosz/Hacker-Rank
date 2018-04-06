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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let daytime = s.slice(-2);
    let hours = s.slice(0, 2);
    let final = ""
    let sub = s.slice(2, -2);
    if (daytime === "PM" && hours != 12) {
        hours = parseInt(hours)
        hours += 12;
        hours = hours.toString()
    };
    if (daytime === "AM" && hours === "12") {
        hours = "00"
    }
    final += hours;
    final += sub;
    return final;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}