let arrDisp = [['profile','',0],['abilities','',0],['gallery','',0],['contact','',0]]
let wrapper = ""
const catchVal = ()=>{
    for(let i=0;i<arrDisp.length;i++){
        arrDisp[i][1] = document.getElementById(`${arrDisp[i][0]}`).innerHTML
    }
    wrapper = document.getElementById("content").innerHTML
}
const emptyVal = () =>{
  for(let i=0;i<arrDisp.length;i++){
        document.getElementById(`${arrDisp[i][0]}`).innerHTML = ""
    }
    
}

const checkActive = param =>{
  return alert(`${param}Nav`)
} 

const showContent = key =>{
  let isEmpty = true
  document.getElementById("content").innerHTML = wrapper 
  emptyVal()
  for(let i=0;i<arrDisp.length;i++){
      if(arrDisp[i][0]==key&&arrDisp[i][2]==0){
          document.getElementById(`${key}`).innerHTML = arrDisp[i][1]
          document.getElementById(`${key}Nav`).className = "navigate font-weight-bold yellow"
          arrDisp[i][2] = 1
          isEmpty = false
          }else{
              document.getElementById(`${arrDisp[i][0]}Nav`).className += "navigate font-weight-bold black"
              arrDisp[i][2] = 0
          }
  }
  if(isEmpty){
      document.getElementById("content").innerHTML =""
  }
} 
catchVal()
showContent("false")
document.getElementById("content").innerHTML = ""