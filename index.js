function theBeatlesPlay(musicians, instruments) {
  var x = [];
  for (let i = 0; i < musicians.length; i++) {
    for (let j = 0; j < instruments.length; j++) {
    x.push(musicians[i] + " plays " + instruments[j]);
  }
  }
  return x;
}