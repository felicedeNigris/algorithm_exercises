
/*********************************
Implement a queue with 2 stacks.
Your queue should have an enqueue
and a dequeue function and it
should be 'first in firs out'
*********************************/



// let's call our stacks.
var stack_enQ = []

var stack_deQ = []


//enqueue will take an array like ['a','b','c']
// and pull each item one by one from the beginning
// order and put them in a new array to resemble
// ['c','b','a']
function enqueue(array){
  for(var i = array.length-1; i >= 0; i--){
    stack_enQ.push(array[i])
  }
  console.log(stack_enQ)
  return stack_enQ
}


//dequeue will take array like ['c','b','a']
// and pull each item from the beginning
// order and put them in a new array to resemble
// ['a','b','c']
function dequeue(array){
  for(var i = 0; i<array.length; i++){
    stack_deQ.push(array[i])
  }
  console.log(stack_deQ)
  return stack_deQ
}



// run in node. var io = require('./firstinfirstout.js')
// io.inout(['a','b','c'])
exports.inout = function(list){
  enqueue(list)
  dequeue(list)
}
