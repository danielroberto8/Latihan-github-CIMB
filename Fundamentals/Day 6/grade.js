const array = [90, 90, 80, 72];

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  let avg = calculateAverage(marks);
  let grade = "";
  if (avg >= 90) {
    grade = "A";
  } else if (avg >= 80) {
    grade = "B";
  } else if (avg >= 70) {
    grade = "C";
  } else if (avg >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }
  return grade;
}

function calculateAverage(arr) {
  let total = 0;
  let ratarata = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  ratarata = total / arr.length;
  return ratarata;
}

/*
Instructions:
Create 2 functions, A and G.
A receives an array of integers as an argument,
calculates the average value of the array, and returns
a grade based on that average value/score.
G receives an integer and returns a grade based on that integer.
Hint:
Call G inside of A
Input: [80, 80, 50]
Output: C
Input: [90, 90, 85, 72]
Output: B
*/
