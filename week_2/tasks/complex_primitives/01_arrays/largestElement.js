let arr = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10];
let BigElement = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (BigElement < arr[i]) {
    BigElement = arr[i];
  }
}
console.log(BigElement);
