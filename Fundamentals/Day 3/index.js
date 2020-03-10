// let input = 123 

// // while(input)
// //     console.log('P') 

// for(let i=1;i<=20;i++){
//     console.log(i)
// }
let length = 10

for(let i=1;i<=length;i++){
    let stars = ''
    for(let j=1;j<=length;j++){
    let limit = length - i
        if(j>limit)   
            stars = stars+'*'
        else
            stars = stars+' '
    } 
    console.log(stars)    
}