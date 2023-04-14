'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const index in items){
    console.log(items[index],index)

  }
}
// printIndices(["apple","cheery","berry"])
// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = [] 

  for (const index in items) {
    if (index % 2 === 0) {
      result.push(items[index]) 
    }
  }

  console.log(result) 
}

// everyOtherItem([1,2,3,4,5,6])

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  function compare(a,b){
    return a - b;
  }
  let result=items.sort(compare);
  let reverseResult = result.slice(0,n);
  console.log(reverseResult.reverse())
}
smallestNItems([6,3,4,2,100,-1],3)
