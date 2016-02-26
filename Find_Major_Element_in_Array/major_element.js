'use strict'

// let list = [2,4,2,5,2,2,7,2,2,9]
let list = [2,5,2,5,5,5,7,2,5,9]



var major = list.length/2
var counts = {}

var findMajorItem = (tally,vote)=>{
  if(!tally[vote]){
    tally[vote] = 1
  }else{
    tally[vote] = tally[vote] + 1
  }
  return tally
}

var result = list.reduce(findMajorItem,counts)

for(var prop in result){
  //console.log(prop,"occurs ",result[prop])
  if(result[prop] >= major){
    console.log(prop)
    return prop
  }
}
