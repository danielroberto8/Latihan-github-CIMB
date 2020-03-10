let len = 100;
let countfb = 0;
let limitfb = 3;

for (let i = 1; i <= len; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    countfb++;
    if (countfb == limitfb) break;
  } else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}