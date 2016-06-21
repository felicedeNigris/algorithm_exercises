function LetterCapitalize(str){
 var strArray = str.split( ) //['John','Smith']
 var outputArray = [];
 for(var i = 0; i < strArray.length; i++){
   //capitalize the first letter
   var firstLetter = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1);
   outputArray.push(firstLetter)
 }
 console.log(outputArray.join(' '))
}

LetterCapitalize('hi joshua how are you doing ')
