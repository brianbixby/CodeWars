function high(x){
  var words = x.split(' ');
  var array = words;
  array = array.map(word => {
    var value = 0;
    for(var i=0; i< word.length; i++) {
      value += word.charCodeAt(i)-96;
    }
   return value;
  })
   var biggestWord = 0;
   var indexBW = 0;
   for(i=0; i< array.length; i++) {
     if(array[i] > biggestWord) {
       biggestWord = array[i];
       indexBW = i;
     }
   }
   return words[indexBW];
 }
//  returns 'taxi';
 high('man i need a taxi up to ubud');