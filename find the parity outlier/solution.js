function findOutlier(integers){
  evens = [], odds = [];
  integers.map(integer => {
    if(integer % 2 === 0) evens.push(integer);
    else odds.push(integer);
  })
  if(evens.length === 1) return evens[0];
  return odds[0];
}

// returns 2
findOutlier([1,2,3]);