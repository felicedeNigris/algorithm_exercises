//example Array
var list = [35,12,87,26,9,28,7]


//This functions swaps from left to right


exports.bubble = function(){
  //hold list length
  var listLen = list.length

  //while: loop stops when last item is greater than second to last item
  //because our swapping starts from first item to last item of array
  while(list[listLen] > list[listLen - 1]){
    //loop through array length
    for(var i = 1; i < listLen; i++){
      //check if array[i] > array[i+1] then swap
      if(list[i] > list[i+1]){
        //hold value of position to right
        var totheright = list[i+1]
        //swap front and back operations
        var swapinFront = list[i-1]
        var swapBack = list[i+1]

        list[i] = swapBack //send list[i] back one
        totheright = swapinFront //send totheright in front one
      }
    }
  }//end while
  return list //should return [7, 9, 12, 26, 28, 35, 87]
}
