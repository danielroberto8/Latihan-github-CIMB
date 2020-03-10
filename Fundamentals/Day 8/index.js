// // const alphaValue = (str) =>{
// //     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
// //     let result=0

// //     for(let i=0;i<str.length;i+=2){
// //         result+=(alpArray.indexOf(str.charAt(i))+1)
// //     }
// //     return result
// // }

// // console.log(alphaValue('abc'))

// class produk{
//     constructor(nama, harga){
//         this.nama=nama
//         this.harga=harga
//     }
// }

// let arr = [
//     new produk('apel', 10000),
//     new produk('apple', 5000),
//     new produk('bape', 7000),
//     new produk('mangga', 8000)
// ]

// function searchProduk(key){
//     let result='';
//     let isMatch
//     for(let i=0;i<arr.length;i++){
//         isMatch=0
//         for(let j=0;j<arr[i].nama.length;j++){
//             for(let k=isMatch;k<key.length;k++){
//                 if(key.charAt(k).toLowerCase()==arr[i].nama.charAt(j).toLowerCase()&&k<key.length){
//                     isMatch++
//                     break
//                 }
//             }
//             if(isMatch==key.length){
//                 result+=arr[i].nama+' '
//                 break
//             }
//         }
//     }
//     return result;
// }

// console.log(searchProduk('pl'))

// let a = {
//     nama:'Doraemon',
//     asal:'Jepang',
//     kontak:{
//         rumah: 'Di rumah',
//         kota : 'BSD'
//     }
// }

// let{nama, asal, kontak:{rumah,kota}} = a

// console.log(a)

let arrNum = [-1,-6,5,2,10,-8,20]
let arrMin = []
let arrPlus = []

function separateArr(arrNum){
    let limMin=0
    let limPlus=0
    for(let i=0;i<arrNum.length;i++){
        if(arrNum[i]>0){
            arrMin[limMin] = arrNum[i]
            limMin++
        }else{    
            arrPlus[limPlus] = arrNum[i]
            limPlus++
        }        
    }
    sortArray(arrMin)
    sortArray(arrPlus)
}

function sortArray(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
}
separateArr(arrNum)
console.log(arrMin)
console.log(arrPlus)