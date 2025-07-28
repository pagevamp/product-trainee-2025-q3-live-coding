function checker(word){
    for(i=0; i<word.length-2; i=i+2){
        decision=word[i]-word[i+2];
        if((decision<=3)&&(decision>=-3))
            console.log(true)
    }
}

checker('7 2 3 5 4');