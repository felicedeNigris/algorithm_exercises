
var mylist = [12,35,87,26,9,28,7]


function mergeSort(list){
  //if data is at index 1 return data
  if(list.length < 2){
    return list
  }
  //mid point
  var midPoint = Math.round(list.length/2)

  //merge the two lists
  return merge( mergeSort(list.slice(0,midPoint)), mergeSort(list.slice(midPoint)))
}


//merge() will run in mergeSort() & perform the merge operation on two arrays
//
// while is performed until there's no longer a length from arr1 or arr2
// We will compare the first item from the arrays and pluck the smaller
// value and insert it in the output array.
// The operation performs until there's no longer data from arr1 or arr2
//
function merge(arr1,arr2){
  var output = []
  //run loop while arr1 & arr2 have a length
  while(arr1.length && arr2.length){
    //if arr1[x] is less than arr2[x] push to output list
    output.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift())
  }
  while(arr1.length){
    output.push(arr1.shift())
  }
  while(arr2.length){
    output.push(arr2.shift())
  }
  console.log(output)
  return output

}


mergeSort(mylist)
