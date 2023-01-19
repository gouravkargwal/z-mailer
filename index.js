const arr = [1, 2, 2, 3, 4];
let arr2 = [];

for (let i = 0; i < arr.length(); i++) {
  for (let j = 1; i <= arr.length(); j++) {
    if (arr[j] === arr[i]) {
      continue;
    }
    arr2.push(i);
  }
}
