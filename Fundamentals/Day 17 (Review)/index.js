// // const repMap = (arr,cb) =>{
// //     let result = []
// //     for(let i=0;i<arr.length;i++){
// //         result.push(cb(arr[i], i, arr))
// //     }
// //     return result
// // }

// // console.log(repMap([1,2,3], (val, idx, array) =>{
// //     let result = []
// //     for(let i=0;i<val;i++){
// //         result.push([1])
// //     }
// //     return result
// // }))

// let newArr = [1,2,3]
// newArr.filter

// repFilter = (arr,cb) => {
//     let result = []
//     for(let i=0;i<arr.length;i++){
//         if(cb(arr[i],i,arr)){
//             result.push(arr[i])
//         }else{

//         }
//     }
//     return result
// }

// console.log(repFilter([1,2,3],(val, idx, array)=>{
// if(val==key){
//      return true
// }else{
//     return false
// }
// }))

// const digitalRoot = (number) => {
//     let arr = number.toString().split('').map(Number)
//     if(arr.length<2){
//         return number
//     }else{
//         let number=0
//         for(let i=0;i<arr.length;i++){
//             number+=arr[i]
//         }
//         return digitalRoot(number)
//     }
// }

// console.log(digitalRoot(132189))

const arrayMatching = (arr1, arr2) => {
  let arr = [...arr1,...arr2];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isMatch = false;
    for (let j = 0; j < result.length + 1; j++) {
      if (arr[i] == result[j]) {
        isMatch = true;
        break;
      }
    }
    if (isMatch == false) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(arrayMatching([1,2,3,4,5,6], [1,5,6,9,13,7]));