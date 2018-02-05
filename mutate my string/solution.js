function mutateMyStrings(stringOne, stringTwo){
  var arrayOne = stringOne.split('');
  var arrayTwo = stringTwo.split('');
  var returnArray = [stringOne];
  for(var i=0; i<arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      arrayOne[i] = arrayTwo[i];
      returnArray.push(arrayOne.join(''));
    }
  }
  return returnArray.join('\n') + '\n';
}
// returns 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n';
mutateMyStrings('bubble gum', 'turtle ham');