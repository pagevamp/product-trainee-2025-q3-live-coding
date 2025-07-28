let count=0;
let total=0;
let avg;

function totalRain(arr){
    for (let i=0 ; i<arr.length ; i++)
    {
        if(arr[i]>0){
            total+=arr[i];
            count+=1;

        }
        else{
            continue;
        }

    }
    if(total>=0){
            avg=total/arr.length;

        }

       return total,count,avg;
}

const data = [-1,1,2,3];
console.log(totalRain(data));