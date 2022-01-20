let input = [3, 2, 5, 9, 4, 8];
let dSum = 11;
let set = new Set();

for (let item of input) {
  let num = dSum - item;
  if (set.has(num)) {
    console.log(num + ' ' + item);
    break;
  }
  set.add(item);
}

function detectPair(sum, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == j) continue;
      else if (array[i] + array[j] === sum) return [array[i], array[j]];
    }
  }
  return null;
}
console.log(detectPair(dSum, input)); //return would be [12,16]

let result;

for (let i = 0; i < input.length; i++)
  for (let k = i; k < input.length; k++)
    if (i !== k && input[i] + input[k] == dSum) result = [input[i], input[k]];

console.log(result);