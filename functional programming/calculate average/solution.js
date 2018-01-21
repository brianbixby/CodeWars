function find_average(array) {
    return array.reduce((acc, cur) => {
      return cur += acc;
    })/array.length;
  }
//   return 2
find_average([1,2,3]);