function fixTheMeerkat(arr) {
    var temp = arr[0];
    arr[0]=arr[2];
    arr[2]=temp;
    return arr;
  }
// Solution: ["head", "body", "tail"]

fixTheMeerkat(["tail", "body", "head"]);
   