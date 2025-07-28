function findDuplicate(str){
let caseStr = str.toLowerCase() 
let newstr =[];
let duplicate =[];
    for(let i=0; i<caseStr.length; i++){
    if(newstr.includes(caseStr[i])){
duplicate.push(caseStr[i])
    }else{
        newstr.push(caseStr[i])
    }
    }
    return duplicate.length
}

console.log(findDuplicate("abcDdxyza"))