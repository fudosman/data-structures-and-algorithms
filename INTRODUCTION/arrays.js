// Arrays organize data sequentially
const strings = ['a', 'b', 'c','d'];
console.log(strings);

// push adds a new element to the end of the array
strings.push('e');
// the time complexity of push is O(1) can also be written as O(n)

// pop removes the last element from the array
strings.pop();
// the time complexity of pop is O(1)

// unshift adds a new element to the beginning of the array
strings.unshift('f');
// the time complexity of unshift is O(n)

// shift removes the first element from the array
strings.shift();
// the time complexity of shift is O(n)

// splice adds/removes elements from the array
// adding elements
strings.splice(3,0,"alien");
// removing elements
strings.splice(2,1);
// the time complexity of splice is O(n)

// in javasctipts, the arrays are dynamic
// but in codes like c++, the arrays are static, and you have to think a bit about the size of the array
// to make sure it is big enough

console.log(strings);


