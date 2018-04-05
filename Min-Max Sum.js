'use strict';

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
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
    function getSum(total, num) {
    return total + num;
    }
    arr = Array.from(arr);
    arr = arr.sort();
    var val1 = arr.slice(0, 4);
    var val2 = arr.slice(1, 5);
    var totalmin = val1.reduce(getSum);
    var totalmax = val2.reduce(getSum);
    console.log(totalmin + " " + totalmax);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
