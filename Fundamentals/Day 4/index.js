// let arr = ['jeruk','mangga',3,true,undefined,null]
// console.log(arr.length)

//let text = 'abcdefghij      \n'
//console.log(text.slice(2,7)) //mengambil sebagian string mulai dari char ke 2 sampai ke 5
//console.log(text.trim()) //menghilangkan space berlebih pada string

// arr.push('Doraemon')//push adalah metode untuk menambah nilai dan panjang array
// arr.push('Naruto')

// arr[4] = 'Sasuke'
// console.log(arr)

let arrNumbers = [3, 7, 6, 9, 5]
let result = 0

for(let i=0;i<arrNumbers.length;i++){
    result += arrNumbers[i];
}

// //advance method
// arrNumbers.forEach(function(val)){
//     result += val
// }

// //loop for of
// for(let i of arrNumbers){
//     console.log(i)
// }

// //more advanced 
// console.log(arrNumbers.reduce((a,b) => a+b))

// let string = 'The quick brown fox jumps over the lazy dog'
// console.log(string.split(' '))

let arrNew = ['Text', 'String', 'Tulisan', 'Doraemon']
// //Cara Ribet
// let key = 'Tulisan'
// for(let i =0;i<arrNew.length;i++){
//     if(key==arrNew[i]){
//         console.log(`${arrNew[i]} berada di index ke-${i}`)
//         break
//     }    
// }

//Cara Praktis
console.log('Tulisan berada di index ke-'+arrNew.indexOf('Tulisan'))

//cara hapus array
arrNew.splice(2,2)
console.log(arrNew)