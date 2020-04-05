let array = ["Naruto","Sasuke","Bambang"]

// array.forEach((val,index)=>{
// console.log(val, index)
// })

// const forEachRep = (array,cb) =>{
//     for(let i=0;i<array.length;i++){
//         cb(array[i], i, array)
//     }
// }

// forEachRep(array, (param1,param2,param3) => {
//     console.log(param1,param2,param3)
// })

let i = 0
for(let item of array){
    if(i%2==0)
    console.log(item)
    i++
}

for (const [i, item] of array.entries()) {
    if(i%2==0)
    console.log(i, item)
  }

  let saya = {
      nama : 'Daniel',
      pekerjaan : 'Pengacara',
      status : 'Baik2 aj'
  }

  for(const key in saya){
      console.log(saya[key])
  }

  setTimeout(()=>{
   console.log("hai")   
  },5000)

  setInterval(()=>{
      console.log("Haloo")
  },1500)