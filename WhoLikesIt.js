function whoLikes(arr){
    let message = ""
    if(arr.length===0){
        message = "no one likes this"
    }
if(arr.length ===1){
   message= `${arr[0]} like this`
    
}else if(arr.length===2){
    message = `${arr[0]} and ${arr[1]} like this`
    
}
else if(arr.length===3){
    message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    
}
else{
    message = `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this`
     
}
return message
}
console.log(whoLikes(["Aayush","Kumar","Hello","out"]))