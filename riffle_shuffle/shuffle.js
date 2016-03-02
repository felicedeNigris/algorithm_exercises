
function riffleShuffle(deck){
  var tempdeck = deck.slice()

  //split deck(array) in 2 halves
  var half = Math.floor(deck.length - (deck.length/2))

  //1st half
  var firsthalf = []
  for(var i = 0; i < half; i++){
    firsthalf.push(deck[i])
  }
  //remove 1st half of items from array after you push them to firshalf
  for(var i = 0; i < half; i++){
    deck.shift(i)
  }
   //console.log(firsthalf)
  //second half
  var secondhalf = []
  for(var b = 0; b < deck.length; b++ ){
    secondhalf.push(deck[b])
  }

  //create a shuffledlist which we will return later
  var shuffledlist = []


  var countA = 0
  //skipping operation on two items so I append 3
  while(countA <= firsthalf.length  + 3){
  //take a random number from half array  and put into a shuffled deck(array) until half one is empty
  //assign a variable to the splice at a random position
  var randfirstHalf = firsthalf.splice(Math.floor(Math.random() * (firsthalf.length)),1)
  //push the random picked item to the shuffled list
  shuffledlist.push(randfirstHalf[0])
   console.log(firsthalf)

  countA++
  }

  var countB = 0
  //skipping operation on two items so I append 3
  while(countB <= secondhalf.length + 3){
  //take a random number from the half array 2 and put into a shuffled deck(array) until half two is empty
  //assign a variable to the splice at a random position
  var randsecondHalf = secondhalf.splice(Math.floor(Math.random() * (secondhalf.length)),1)
  //push the random picked item to the shuffled list
  shuffledlist.push(randsecondHalf[0])

  countB++
  }

  //return the shuffled list
  console.log(tempdeck,"turns into", shuffledlist)
  return shuffledlist
}

var list = [1,2,3,4,5,6,7,8,9,10]

riffleShuffle(list)
