
function counter(word,character,position){
    count=0;
    for(i=0;i<word.length;i++){
        if(i<position)
            break;
        if(word[i]==character)
            count++;
    }
    if(i==(word.length+1))
        console.log(count)
    return;
}

function main() {
    mainword='aabbcde';
    for(i=0; i<mainword.length; i++){
        counter((mainword,mainword[i]),i);
        // console.log(count);
    }
}

main();