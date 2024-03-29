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
    const reservedSeats = new Array<boolean>(N + 1).fill(false);
    const result: number[] = [];

    for (let op of operations) {
        if (op === 0) {
            for (let seat = 1; seat <= N; seat++) {
                if (!reservedSeats[seat]) {
                    reservedSeats[seat] = true;
                    result.push(seat);
                    break;
                }
            }
        } else {
            reservedSeats[op] = false;
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
