var list = [4,1,2,5,3]

function flip(array, flipIndex){
  //flip from flipIndex
  var fliparray = []
  for(var i = flipIndex; i >= 0; i--){
    fliparray.push(array[i])
  }
  //append the flipped list to the original list
  var returnlist = array.slice()
  for(var b = 0; b <= flipIndex; b++){
    returnlist[b] = fliparray[b]
  }
  console.log("We flip ", array, "to ", returnlist)
}


flip(list,3)
flip(list,4)
flip(list,2)
