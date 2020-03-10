// const pangkat = () =>{

// }

// const callback = () =>{

// }
// const validator = (arr, cb) =>{
//     let arrResult = []
//     for(let i=0;i<arr.length;i++){
//         if(cb(arr[i])){
//             arrResult[i]=arr[i]
//         }else{
//             arrResult[i]=0
//         }
//     }
//     return arrResult;
// }

const repMap = (arr, cb) => {  
  let arrResult = [];
  for (let i = 0; i < arr.length; i++) {
      arrResult.push(cb(arr[i]))
  }
  return arrResult;
};

let arrParam = [1, 2, 3, 4];
console.log(
  repMap(arrParam, val => {
    return val * 2;
  })
);
