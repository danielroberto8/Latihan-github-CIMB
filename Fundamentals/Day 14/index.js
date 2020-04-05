const mumble = (keyword) =>{
    let result = ""
    for(let i=0;i<keyword.length;i++){
        for(let j=0;j<i+1;j++){
            if(j==0)
            result+=keyword.charAt(i).toUpperCase()
            else
            result+=keyword.charAt(i).toLowerCase()
        }
        if(i==keyword.length-1)
        break
        result+="-"
    }
    return result;
}

console.log(mumble("Hello"))