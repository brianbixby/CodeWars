function formatWords(words){
    if(!words) {
      return "";
    }
    let returnString = '';
    let parsedArr = [];
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > 0) {         
        parsedArr.push(words[i]);
      }
    }
    if(parsedArr.length === 0) {
      return "";
    }
    if(parsedArr.length ==1) {
      return parsedArr[0];
    }
    console.log(parsedArr);
    for(i=0;i<parsedArr.length-2; i++) {
      returnString=returnString.concat(parsedArr[i] + ', ');
    }
    return returnString.concat(parsedArr[parsedArr.length-2] + ' and ' + parsedArr[parsedArr.length-1]);
  }
//   returns one and two
  formatWords(['one', 'two', '']);