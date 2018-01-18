function isNice(arr){
    if(arr.length < 2) {
      return false;
    }
    for(var i=0; i<arr.length; i++) {
      var temp = arr[i] +1;
      if(arr.indexOf(arr[i] +1) < 0 && arr.indexOf(arr[i] -1) < 0) {
        return false;
     }
    }
    return true;
  }
//   evaluates to true
isNice([2,10,9,3]);
