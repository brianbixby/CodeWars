function filter_list(l) {
    return l.filter(data => typeof data === 'number');
  }
  // returns [1, 2]
  filter_list([1,2,'a','b']);