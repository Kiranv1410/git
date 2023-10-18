let num1 = [2,35,14,16,95,99]

let min1 = num1[0];

for(let i=1; i<num1.length; i++){
    if (num1[i]<min1) {
        min1 = num1[i];
    }
}

console.log(min1)