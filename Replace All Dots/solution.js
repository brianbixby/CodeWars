var replaceDots = function(str) {
  var newStr = '';
  for(var i=0; i<str.length; i++) {
    if(str[i] == '.') {
      newStr = newStr.concat('-');
    }
    else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

replaceDots("one.two.three");
