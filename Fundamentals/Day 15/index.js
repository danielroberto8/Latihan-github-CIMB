const tripleTrouble = (one, two, three) => {
    // Buatlah sebuah function yang menerima 3 string 
    // dan setiap string memiliki panjang yang sama
    // Input: "aa", "bb", "cc"
    // Output: "abcabc"
    // Input: "ab", "cd", "ef"
    // Output: "acebdf"
    // write your code here
    let arr = [one,two,three]
    let result = ""
    for(let i = 0; i<arr[0].length;i++){
        for(let j=0;j<arr.length;j++){
            result+=`${arr[j].charAt(i)}`
        }
    }
    return result
  }
  console.log(tripleTrouble("ab", "cd", "ef"))

  const altCaps = (str) => {
    // Buatlah sebuah function yang menerima sebuah string
    // Outputnya sebuah array yang index pertama adalah semua 
    // huruf yg posisinya ganjil menjadi kapital, index kedua
    // semua huruf yg posisinya genap jadi kapital
    // Input: "abcdef"
    // Output: ["AbCdEf", "aBcDeF"]
    // write your code here
    let arr = []
    let res1 = ""
    let res2 = ""
    for(let i=0;i<str.length;i++){
        if(i%2==0){
            res1+=str.charAt(i).toUpperCase()
            res2+=str.charAt(i).toLowerCase()
        }else{
            res1+=str.charAt(i).toLowerCase()
            res2+=str.charAt(i).toUpperCase()
        }
    }
    arr.push(res1)
    arr.push(res2)
    return arr
  }
  console.log(altCaps("abcdef"))