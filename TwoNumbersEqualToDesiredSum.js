let input = [3, 2, 5, 9, 4, 8];
let dSum = 11;
let set = new Set();

let arr1=[2,4,6,0];

for (let item of input) {
  let num = dSum - item;
  if (set.has(num)) {
    console.log(num + ' ' + item);
    break;
  }
  set.add(item);
}

// 2) Naive approach - time complexity - O(n^2)
function detectPair(sum, array) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
       if (array[i] + array[j] === sum) 
         return [array[i], array[j]];
    }
  }
  return ('Pair not found');
}
console.log(detectPair(dSum, arr1)); 

let result;

for (let i = 0; i < input.length; i++)
  for (let k = i; k < input.length; k++)
    if (i !== k && input[i] + input[k] == dSum) result = [input[i], input[k]];

console.log(result);

function findPair(sum, arr1) {
  let arr=arr1.sort((a,b)=> { return a-b;});
  let low= 0;
  let high= arr.length-1;

  while(low < high){
    if (arr[low]+ arr[ high]=== sum){
      return [arr[low], arr[high]];
    }
    (arr[low]+ arr[high]< sum)? low++: high--;
  }
  return ('Pair not found');
}
console.log(findPair(dSum, input)); 