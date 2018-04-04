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
 * Complete the staircase function below.
 */
function staircase(n) {
    /*
     * Write your code here.
     */
    var sp = " ";
    var str = "#";
    var final = '';
    var newl = '\n';
    for (var i = 0; i < n; i++) {
        for (var spc = 1; spc < n - i; spc++) {
            final += sp;
        }
        for (var star = 0; star < i + 1; star++) {
            final += str;
        }
        final += newl;
    }
    console.log(final);

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
