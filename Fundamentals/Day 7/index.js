class Person{
    constructor(nama,tahunLahir,asal){
        this.nama=nama
        this.tahunLahir=tahunLahir
        this.asal=asal
    }
}

class Developer extends Person{
    constructor(nama, tahunLahir, asal, specialty, pengalaman){
        super(nama,tahunLahir,asal)
        this.specialty=specialty
        this.pengalaman=pengalaman
    }
}

let a = new Person('Raul Lemos','1945','Timor Leste')
let b = new Developer('Anang','1945','Indonesia','Hacker','100')

console.log(a)
console.log(b)

// let input=parseInt(prompt('kau parkir berapa lama?'))
// function itungParkir(input){
//     let result=0
//     if(input>=2){
//         result=2*2000
//         input-=2
//     }    
//     if(input>0){
//         result+=input*500
//     }
//     return result;
// }

// console.log(itungParkir(3))

// function cariSelisihMinMax(arr){
//     let temp = 0
//     for(let i = 0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//             temp = arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp
//             }
//         }
//     }
//     return arr[arr.length-1]-arr[0]
// }

// arrNum = [2,1,3,4,5,6,7,8,10,11,12]
// console.log(cariSelisihMinMax(arrNum))

// function cariMedian(arr){
//         let temp = 0
//     for(let i = 0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//             temp = arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp
//             }
//         }
//     }
//     if(arr.length%2>0){
//         return arr[(arr.length-1)/2]
//     }else{
//         return (arr[arr.length/2]+arr[(arr.length/2)-1])/2
//     }
// }
// arrNum = [1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(cariMedian(arrNum))

// function itungIndex(input){
//     let result=0;
//     for(let i=0;i<input.length;i++){
//         result+=(i+1)
//     }
//     return result;
// }
// console.log(itungIndex('mata pancing'))