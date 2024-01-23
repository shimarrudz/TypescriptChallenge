//@ts-ignore
const { stdin, stdout, exit } = process;
stdin.resume();
stdin.setEncoding('utf-8');

let rawInput = "";

stdin.on('data', function (data) {
    rawInput += data.toString().trim();
    rawInput += '\n';
});

function solve(N: number, operations: number[]): number[] {
    const reservedSeats = new Set<number>();
    const result: number[] = [];

    for (let op of operations) {
        if (op === 0) {
            let seatToReserve = 1;
            while (reservedSeats.has(seatToReserve)) {
                seatToReserve++;
            }
            reservedSeats.add(seatToReserve);
            result.push(seatToReserve);
        } else {
            reservedSeats.delete(op);
        }
    }

    return result;
}

stdin.on('end', function () {
    const input = rawInput.replace(/\n$/, "").split("\n");

    let idx = 0;
    const N = parseInt(input[idx++].trim(), 10);
    const K = parseInt(input[idx++].trim(), 10);
    const operations = input.slice(idx, idx + K).map(el => parseInt(el.trim(), 10));

    const output = solve(N, operations);
    stdout.write(output.join(' ') + '\n');

    exit();
});

stdin.resume();
