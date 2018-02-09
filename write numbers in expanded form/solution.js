function expandedForm(num) {
  for(let i=0, numString = num.toString(), returnString = ''; i<numString.length; i++) {
    if (i == numString.length-1) {
      returnString += numString[i];
      if(returnString.indexOf(' + 0') > -1) return returnString.split(' + 0')[0]
      else return returnString
    }
    if(numString[i] !== '0') returnString += numString[i] + '0'.repeat((numString.length -1 -i)) + ' + ';
  }
}

// returns '70000 + 300 + 4'
expandedForm(70304); 