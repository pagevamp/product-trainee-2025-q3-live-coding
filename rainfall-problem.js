let rain=[1,2,3,-2,5];
let total=0,positive=0,average=0;
function sum(){
    for(i=0; i<rain.length;i++){
        if (rain[i]>0)
            total+=rain[i]
    }
    console.log(total);
}
function countpositive(){
    for(i=0; i<rain.length;i++){
        if (rain[i]>0)
            positive++;
    }
    console.log(positive);
}
function averagerain(){
    if (total!=0)
        average=total/positive;
    if(average==0){
        console.log('No rain');
        return;
    }
    console.log(average);
}

sum();
countpositive();
averagerain();