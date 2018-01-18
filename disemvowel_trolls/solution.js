function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var returnStr = '';
    for(var i=0; i<str.length; i++) {
      if(vowels.indexOf(str[i].toLowerCase()) < 0) {
        returnStr = returnStr + str[i];
      }
    }
    return returnStr;
  }
// returns Ths wbst s fr lsrs LL!
disemvowel("This website is for losers LOL!");