let number = [3,4,5,6,7,8,9];

function checksort(){
    for(let i=1;i<number.length;i++){
        if(number[i]>=number[i-1]){
            
        }else{
            return false;
        }
    }

    return true;
}

console.log(checksort());