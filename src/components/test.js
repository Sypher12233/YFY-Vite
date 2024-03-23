import React from 'react';

// Modify immutable function
export const removeItemAtIndex = (list, index) => {
  // Use slice to create a copy of the array up to the index
  const firstPart = list.slice(0, index);
  // Use slice again to get the elements after the removed index
  const secondPart = list.slice(index + 1);
  // Concatenate the two parts into a new array
  const newList = [...firstPart, ...secondPart];
  return newList;
};

// Test the function
const list = ['a', 'b', 'c', 'd'];
const index = 1;
const result = removeItemAtIndex(list, index);
console.log(result); // Output: ['a', 'c', 'd']
