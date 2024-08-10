
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var hits = 0;
var isSunk = false;
var guess;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt ("Choise the locatoins that have place another ships");
  if (guess>=8||guess<=0) {
    alert ("Its not correct");
    
  } else {
      guesses = guesses + 1;
      if (guess==location1||guess==location2||guess==location3) {
        alert ("You've hit!!!");
        hits = hits + 1;
          if (hits == 3) {
            isSunk == true;
            alert ("You are winner!!! Evrebody ships was sank!!!");
            console.log(guess);
          }
      }      
      else {
        alert ("Miss!!!");
      }
  }
}
