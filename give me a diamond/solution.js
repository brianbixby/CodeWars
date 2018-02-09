function diamond(n){
  if(n < 3 || n%2 === 0) return null;
  let middleRow = Math.ceil(n/2);
  let row = 1;
  let stars = 1;
  let returnString = '';
  for(var i=0; i <n; i++) {
    let spaces = Math.abs(middleRow - row);
    returnString = returnString + ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    row*2 < n ? stars = stars + 2 : stars = stars -2;
    row++;
  }
  return returnString;
}
// returns " *\n***\n *\n"
diamond(3);