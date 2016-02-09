//find duplicates in an array



var mylist= [2,4,1,2,6,1,6,3,0]
var seen = {}
var out = []
var len = mylist.length
//loop through list
for(var i = 0; i< len; i++){
  //if spot item, set it to 1
    if(seen[mylist[i]] !== 1){
      seen[mylist[i]] = 1
    }
    //if spotted item is === to spotted item, spotted item +=1
    else if(seen[mylist[i]] === seen[mylist[i]]){
      seen[mylist[i]] += 1
    }
    //if spotted item > 1, push to out list
    if(seen[mylist[i]]> 1){
      out.push(mylist[i])
    }
}

//print the seen object ex:{1:2, 2:0, 4:3}
//console.log(seen)


console.log(out) //returns [2,1,6]
