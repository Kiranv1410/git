let num = [2,35,14,16,95,99]

let min = num[0];

let smin = num[1];

for(let i=1; i<num.length; i++){
    if (num[i]<min) {
        min = num[i];
    }
}


for(let i=1; i<num.length; i++){
    if(num[i]<smin && num[i]>min){
        smin = num[i];
    }
}

console.log(smin)


// if(arr[i]>smax && arr[i]<max)