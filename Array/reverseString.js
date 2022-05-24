// create a function that reverses a string;
// 'hi my name is Alex' should be: 
// 'xelA si eman ym ih' 

function reverse(str) {
  // check our input 
  if (typeof str !== 'string' || str.length < 2 || str === '' || str === null || str === undefined || !str) {
    return 'please enter a string';
  }
  // split the string into an array
  allStrings = str.split('');

  // reverse the array
  allStrings.reverse();
  // reverse the words in the array

  // join the array into a string
  return allStrings.join('');
  
}

console.log(reverse('hi my name is Alex'));
