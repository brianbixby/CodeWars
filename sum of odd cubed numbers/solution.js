function cubeOdd(arr) {
    if(arr.length === arr.filter(arrItems => typeof arrItems === 'number').length) {
      let filtered = arr.filter(arrItems => arrItems%2 !== 0);
      if (filtered.length > 0) {
        return filtered.map(arrItems => Math.pow(arrItems, 3)).reduce((acc, cur) => {return cur += acc});
      }
      else {
        return 0;
      }
    }
    return undefined;
  }
// returns 28
cubeOdd([1, 2, 3, 4]);