// merge sorted arrays

let arr1 = [1, 2, 3, 5];
let arr2 = [6,3, 8, 10];
let arr3 = [7, 9,3, 4];

const mergeSortedArrays = function (arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3).sort((a, b) => a - b);
};


console.log(mergeSortedArrays(arr1,arr2,arr3));