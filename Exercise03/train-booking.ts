//@ts-ignore
const { stdin, stout, exit} = process 
stdin.resume();
stdin.setEncoding('utf-8');

let rawInput = "";

stdin.on('data', function (data) {
    rawInput += data.toString().trim();
    rawInput += '\n';
})

function solve(N: number, bookings: [number, number, number][]): number[] {
    const finalResult = new Array(N).fill(10000);
    const result: { [key: number]: number} ={};

    for (let i = 1; i<= N; i++) {
        result[i] = 0;
    }

    for (let booking of bookings) {
        for (let i = booking[0]; i <= booking[1]; i++) {
            result[1] = result[1] + booking[2];
        }
    }

    return finalResult.map((value, index) => value - result[index + 1])
}