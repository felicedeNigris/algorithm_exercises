//Flatten two arrays and sort the values
/*
var my_list     = [3, 4, 6, 10, 11, 15]
var alices_list = [1, 5, 8, 12, 14, 19]

console.log(merge_lists(my_list, alices_list))
# prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

var list = [3,4,6,10,11,15]
var list2 = [1,5,8,12,14]

function merge_lists(list,list2){
  //make output list
  var mergedlist = []

  //length of the loop
  var loopdur = list.length + list2.length

  for(var i = 0; i < loopdur; i++){
    //beginning of lists
    var head_of_list = list[0]
    var head_of_list2 = list2[0]
    //if list1 < list2 & while list1 isn't undefined(or not contain a value) push list1 value
    if(head_of_list < head_of_list2 && head_of_list !== undefined){
      var temp = list.shift()
      mergedlist.push(temp)
    }
    //if list2 < list1 & while list2 isn't undefined(or not contain a value) push list2 value
    else if(head_of_list2 < head_of_list && head_of_list2 !== undefined){
      var temp2 = list2.shift()
      mergedlist.push(temp2)
    }
  }
  console.log(mergedlist)
  return mergedlist
}


merge_lists(list,list2)
