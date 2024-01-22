//@ts-ignore
const { stdin, stdout, exit } = process;
stdin.resume();
stdin.setEncoding('utf-8');

let rawInput = "";

stdin.on('data', function (data) {
    rawInput += data.toString().trim();
    rawInput += '\n';
});

function solve(patients: number[][]): number {
    let currentTime = 0;
    let totalWaitingTime = 0;

    for (const [arrival, time] of patients) {
        currentTime = Math.max(currentTime, arrival);
        
        totalWaitingTime += currentTime - arrival;
        
        currentTime += time;
    }

    const averageWaitingTime = Math.floor(totalWaitingTime / patients.length);
    
    return averageWaitingTime;
}

stdin.on('end', function () {
    const input = rawInput.replace(/\n$/, "").split("\n");

    let idx = 0;
    const n = parseInt(input[idx++].trim(), 10);
    const patients = input.slice(idx, idx + n).map(patientData => 
        patientData.trim().split(' ').map(el => parseInt(el, 10))
    );

    const output = solve(patients);
    stdout.write(output.toString());

    exit();
});
