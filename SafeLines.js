function safeLines(str){
    console.log("🚀 ~ safeLines ~ nums",str.length)
    let arr =[];
for(let i=0; i<str.length; i++){
arr.push(str[i])
}
  return arr
}
console.log(safeLines('1234 333\n1212'))