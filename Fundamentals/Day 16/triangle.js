const triangleArray = limit => {
  let arr = [];
  let arrResult = [];
  for (let i = 0; i < limit; i++) {
    arr = [...arr, i + 1];
    arrResult.push(arr);
  }
  return arrResult;
};

const triangleOdd = limit => {
  let arrResult = [];
  let counter = 1;
  for (let i = 0; i < limit; i++) {
    let arr = [];
    for (let j = 0; j < i + 1; j++) {
      arr[j] = counter;
      counter += 2;
    }
    arrResult.push(arr);
  }
  return arrResult;
};

const triangleFibonacci = limit => {
  let arrResult = [];
  for (let i = 0; i < limit; i++) {
    let arr = [];
    if (i == 0) {
      arr = [0];
    } else if (i == 1) {
      arr = [1, 1];
    } else {
      let temp = [...arrResult[i - 1]];
      for (let j = 0; j < i + 1; j++) {
        if (j == 0) {
          arr[j] = temp[temp.length-1] + temp[temp.length-2];
        } else if (j == 1) {
          arr[j] = temp[temp.length-1] + arr[0];
        } else {
          arr[j] = arr[j - 2] + arr[j - 1];
        }
      }
    }
    arrResult.push(arr);
  }
  return arrResult;
};

const trianglePascal = limit => {
  let arrResult = [];
  for (let i = 0; i < limit; i++) {
    let arr = [];
    if (i == 0) {
      arr = [1];
    } else if (i == 1) {
      arr = [1, 1];
    } else {
      let temp = [...arrResult[i - 1]];
      for (let j = 0; j < i + 1; j++) {
        if (j == 0 || j == i) {
          arr[j] = 1;
        } else {
          arr[j] = temp[j] + temp[j - 1];
        }
      }
    }
    arrResult.push(arr);
  }
  return arrResult;
};

console.log(triangleArray(6));
console.log(triangleOdd(6));
console.log(triangleFibonacci(6));
console.log(trianglePascal(6));