function solution(str){
    // return str.split("").reverse().join("");
    var returnString = '';
    for(var i=str.length-1; i>-1; i--) {
      returnString = returnString +str[i];
    }
    return returnString
  }
  // returns 'dlrow'
  solution('world');