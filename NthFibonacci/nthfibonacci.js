
function fib(num){
  //create an array to hold the fibonacci index value
  var fibIndex = [0,1]
  var counter = 0
  var iterator = 0
  for(var counter = 0 ; counter < num; counter ++){
    fibIndex.push(fibIndex[counter] + fibIndex[counter+1])
  }
  console.log(fibIndex) //prints list
  console.log(fibIndex[num]) //prints num index value in the fibonacci sequence
  return fibIndex[num]
}


fib(4)
fib(10)
