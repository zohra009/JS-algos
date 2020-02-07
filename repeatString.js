
Solution 

function repeatStringNumTimes(string, times) {
   //use .repeat() method to check if times > 0 ; then repeat string
   if( times > 0){
       return string.repeat(times)
   } else {
       //return empty str
       return ""
   }
}


/////////////////////////////////////////////////
//Solution refactored using ternery 
function repeatStringNumTimes(string, times) {
    times > 0 ? string.repeat(times) : "";
}