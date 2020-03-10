var letters = "abcdefghijklmnopqrstuvsxyz";

const caesarCipher = (word, num) => {
  // Buat sebuah function yang menerima sebuah string S dan number N ( N >= 0 )
  // Output functionnya adalah sebuah string dengan setiap huruf
  // dari S bergeser sebanyak N posisi dalam urutan alphabet

  // Input: 'abc', 1
  // Output: 'bcd'

  // Input: 'abc', 28
  // Output: 'cde'

  // write your code here
  if (num > 26) {
    num = num % 26;
  }

  let result = "";
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (word.charAt(i).toLowerCase() == letters.charAt(j).toLowerCase()) {
        result += letters.charAt(j + num);
        break;
      }
    }
  }
  return result;
};
console.log(caesarCipher("abc", 54));

const plusMinus = numArr => {
  // Buat sebuah function yang menerima sebuah array of numbers
  // Output functionnya adalah hasil dari setiap angka dari
  // array ditambah atau dikurang dengan index berikutnya secara bergantian.
  // Maaf penjelasannya gak jelas hehe

  // Input: [1,2,3,4]
  // Output: 1 + 2 - 3 + 4 = 4

  // Input: [1, 1, 1, 1, 1]
  // Output: 1 + 1 - 1 + 1 - 1 = 1
  let result = `${numArr[0]} + `;
  let resultNum = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (i % 2 == 0) {
      resultNum -= numArr[i];
      if (i == numArr.length - 1) {
        result += `${numArr[i]} = ${resultNum}`;
      } else {
        result += `${numArr[i]} + `;
      }
    } else {
      resultNum += numArr[i];
      if (i == numArr.length - 1) {
        result += `${numArr[i]} = ${resultNum}`;
      } else {
        result += `${numArr[i]} - `;
      }
    }
  }
  return result;
};
numberArr = [1, 1, 1, 1, 1];
console.log(plusMinus(numberArr));

const isPalindrome = keyword => {
  // Buat sebuah function yang menerima sebuah string
  // Function ini akan mengecek apakah string ini sebuah palindrome

  // Sebuah palindrome adalah sebuah kata atau kalimat yang jika dibalik,
  // akan memiliki urutan huruf yang sama dengan kata atau kalimat aslinya

  // Return true jika kata atau kalimat tersebut sebuah palindrome
  // return false sebaliknya

  // Function harus case insensitive

  // Input: 'madam'
  // Output: true

  // Input: 'Racecar'
  // Output: true

  // Input: '123321'
  // Output: true

  // Input: 'NuRsES ruN'
  // Output: true

  // Input: 'hehe kocak'
  // Output: false
  keyword = keyword.replace(/ /g, "").toLowerCase();
  let palindrome = true;
  let j = keyword.length - 1;
  for (let i = 0; i < keyword.length; i++) {
    if (keyword.charAt(i) != keyword.charAt(j)) {
      palindrome = false;
      break;
    }
    j--;
  }
  return palindrome;
};
console.log(isPalindrome("NuRsES ruN"));

//Coding Challenge
const countWords = sentence => {
  let val = 0;
  let keyword = "";
  let result = "";
  let arrWord = sentence.split(" ");
  for (let i = 0; i < arrWord.length - 1; i++) {
    let count = 0;
    for (let j = i; j < arrWord.length; j++) {
      if (arrWord[i].toLowerCase() == arrWord[j].toLowerCase()) {
        count++;
        if (count > val) {
          val = count;
          keyword = arrWord[i];
        }
      }
    }
  }
  result=`\n${sentence}\nKata yang paling sering muncul adalah "${keyword}", sebanyak ${val} kali.\n`
  return result;
};
let key = "Saya aku sayA aku";
console.log(countWords(key));