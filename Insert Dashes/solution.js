function insertDash(num) {
    var numString = num.toString();
    var returnString = numString[0];
    for(var i=1; i<numString.length; i++) {
      if(parseInt(numString[i])%2!==0 && parseInt(numString[i-1])%2!==0) {
        returnString = returnString + '-' + numString[i]; 
      }
      else {
        returnString = returnString + numString[i]; 
      }
    }
    return returnString;
  }
  // Soultion should be '4547-9-3'
  insertDash(454793);