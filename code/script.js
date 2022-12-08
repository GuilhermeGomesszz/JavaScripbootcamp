

function avar(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    } 
    let res = total / arr.lenght;
    return res;
}          