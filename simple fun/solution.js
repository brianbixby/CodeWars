function bestScore(teamA,teamB){
  teamA.sort(numSort);
  teamB.sort(numSort);
  var biggestDiff = teamA.length*2 - teamB.length*2;
  for(var i=0; i< teamA.length; i++) {
    var teamAScore = teamA.length*3 -i;
    var teamBScore = teamB.map(shot => {
      if(shot >= teamA[i]) {
        return 3;
      }
      else {return 2}
    }).reduce((acc, cur) => {
      return cur += acc;
    })
    var diff = teamAScore - teamBScore;
    if(diff > biggestDiff) {
      biggestDiff = diff;
    }
  }
  return biggestDiff;
}

function numSort(a,b) {
  return a-b;
}
// returns 0
bestScore([6,5], [1,2,3]);