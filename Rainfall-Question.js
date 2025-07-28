function rainfall(arr){
    let total =0;
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            total+=arr[i]
            count+=1
        }
    }
    let average = total/count
    return average
}

console.log(rainfall([1,2,3]))